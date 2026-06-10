import { createContext, useContext, useReducer, useCallback, useMemo } from "react";

const CartContext = createContext(null);

const HALF_BUNDLE_MAX_CREDITS = 15;

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_COURSE": {
      if (state.selectedCourses.find((c) => c.code === action.payload.code)) {
        return state;
      }
      return {
        ...state,
        selectedCourses: [...state.selectedCourses, action.payload],
      };
    }
    case "REMOVE_COURSE":
      return {
        ...state,
        selectedCourses: state.selectedCourses.filter(
          (c) => c.code !== action.payload
        ),
      };
    case "ADD_SESSION": {
      const existing = state.sessions.find(
        (s) => s.courseCode === action.payload.courseCode
      );
      if (existing) {
        return {
          ...state,
          sessions: state.sessions.map((s) =>
            s.courseCode === action.payload.courseCode
              ? { ...s, hours: action.payload.hours }
              : s
          ),
        };
      }
      return {
        ...state,
        sessions: [...state.sessions, action.payload],
      };
    }
    case "REMOVE_SESSION":
      return {
        ...state,
        sessions: state.sessions.filter(
          (s) => s.courseCode !== action.payload
        ),
      };
    case "SET_BUNDLE_ACTIVE":
      return {
        ...state,
        selectedCourses: action.payload.courses,
        isBundleActive: true,
        isHalfBundleActive: false,
        bundleYear: action.payload.year,
        bundleSemester: action.payload.semester,
        bundleCourseCodes: action.payload.courses.map((c) => c.code),
      };
    case "SET_BUNDLE_INACTIVE":
      return { ...state, isBundleActive: false, bundleYear: null, bundleSemester: null, bundleCourseCodes: [] };
    case "SET_HALF_BUNDLE_ACTIVE":
      return {
        ...state,
        isHalfBundleActive: true,
        isBundleActive: false,
        selectedCourses: action.payload.courses || [],
      };
    case "SET_HALF_BUNDLE_INACTIVE":
      return { ...state, isHalfBundleActive: false };
    case "CLEAR_CART":
      return {
        ...state,
        selectedCourses: [],
        sessions: [],
        isBundleActive: false,
        isHalfBundleActive: false,
        bundleYear: null,
        bundleSemester: null,
        bundleCourseCodes: [],
      };
    case "TOGGLE_CART":
      return { ...state, isCartOpen: !state.isCartOpen };
    case "OPEN_CART":
      return { ...state, isCartOpen: true };
    case "CLOSE_CART":
      return { ...state, isCartOpen: false };
    default:
      return state;
  }
};

const initialState = {
  selectedCourses: [],
  sessions: [],
  isCartOpen: false,
  isBundleActive: false,
  isHalfBundleActive: false,
  bundleYear: null,
  bundleSemester: null,
  bundleCourseCodes: [],
};

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addCourse = useCallback((course) => {
    dispatch({ type: "ADD_COURSE", payload: course });
  }, []);

  const removeCourse = useCallback((courseCode) => {
    dispatch({ type: "REMOVE_COURSE", payload: courseCode });
  }, []);

  const addSession = useCallback((courseCode, courseTitle, hours) => {
    dispatch({
      type: "ADD_SESSION",
      payload: { courseCode, courseTitle, hours, pricePerHour: 20 },
    });
  }, []);

  const removeSession = useCallback((courseCode) => {
    dispatch({ type: "REMOVE_SESSION", payload: courseCode });
  }, []);

  const isSessionSelected = useCallback(
    (courseCode) => state.sessions.some((s) => s.courseCode === courseCode),
    [state.sessions]
  );

  const getSession = useCallback(
    (courseCode) => state.sessions.find((s) => s.courseCode === courseCode),
    [state.sessions]
  );

  const setBundleActive = useCallback((courses, year, semester) => {
    dispatch({ type: "SET_BUNDLE_ACTIVE", payload: { courses, year, semester } });
  }, []);

  const setBundleInactive = useCallback(() => {
    dispatch({ type: "SET_BUNDLE_INACTIVE" });
  }, []);

  const setHalfBundleActive = useCallback((courses) => {
    dispatch({ type: "SET_HALF_BUNDLE_ACTIVE", payload: { courses } });
  }, []);

  const setHalfBundleInactive = useCallback(() => {
    dispatch({ type: "SET_HALF_BUNDLE_INACTIVE" });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: "CLEAR_CART" });
  }, []);

  const toggleCart = useCallback(() => {
    dispatch({ type: "TOGGLE_CART" });
  }, []);

  const openCart = useCallback(() => {
    dispatch({ type: "OPEN_CART" });
  }, []);

  const closeCart = useCallback(() => {
    dispatch({ type: "CLOSE_CART" });
  }, []);

  const isCourseSelected = useCallback(
    (courseCode) => state.selectedCourses.some((c) => c.code === courseCode),
    [state.selectedCourses]
  );

  const courseTotal = useMemo(() => {
    return state.selectedCourses.reduce((sum, c) => sum + (c.price || 0), 0);
  }, [state.selectedCourses]);

  const totalCredits = useMemo(() => {
    return state.selectedCourses.reduce((sum, c) => sum + (c.credits || 0), 0);
  }, [state.selectedCourses]);

  const halfBundleCreditsUsed = useMemo(() => {
    if (!state.isHalfBundleActive) return 0;
    return totalCredits;
  }, [state.isHalfBundleActive, totalCredits]);

  const halfBundleCoveredCodes = useMemo(() => {
    if (!state.isHalfBundleActive) return [];
    let remaining = HALF_BUNDLE_MAX_CREDITS;
    const covered = [];
    for (const c of state.selectedCourses) {
      if (remaining <= 0) break;
      const credits = c.credits || 0;
      if (credits <= remaining) {
        covered.push(c.code);
        remaining -= credits;
      }
    }
    return covered;
  }, [state.selectedCourses, state.isHalfBundleActive]);

  const extraCourseTotal = useMemo(() => {
    if (state.isBundleActive) {
      return state.selectedCourses
        .filter((c) => !state.bundleCourseCodes.includes(c.code))
        .reduce((sum, c) => sum + (c.price || 0), 0);
    }
    if (state.isHalfBundleActive) {
      return state.selectedCourses
        .filter((c) => !halfBundleCoveredCodes.includes(c.code))
        .reduce((sum, c) => sum + (c.price || 0), 0);
    }
    return 0;
  }, [state.selectedCourses, state.isBundleActive, state.isHalfBundleActive, state.bundleCourseCodes, halfBundleCoveredCodes]);

  const sessionTotal = useMemo(() => {
    return state.sessions.reduce((sum, s) => sum + s.hours * s.pricePerHour, 0);
  }, [state.sessions]);

  const totalPrice = useMemo(() => {
    if (state.isBundleActive) return 99 + extraCourseTotal + sessionTotal;
    if (state.isHalfBundleActive) return 59 + extraCourseTotal + sessionTotal;
    return courseTotal + sessionTotal;
  }, [courseTotal, extraCourseTotal, sessionTotal, state.isBundleActive, state.isHalfBundleActive]);

  const itemCount = useMemo(
    () => state.selectedCourses.length + state.sessions.length,
    [state.selectedCourses, state.sessions]
  );

  const halfBundleIsFull = useMemo(() => {
    if (!state.isHalfBundleActive) return false;
    return halfBundleCreditsUsed >= HALF_BUNDLE_MAX_CREDITS;
  }, [state.isHalfBundleActive, halfBundleCreditsUsed]);

  const halfBundleCreditsLeft = useMemo(() => {
    if (!state.isHalfBundleActive) return HALF_BUNDLE_MAX_CREDITS;
    return Math.max(0, HALF_BUNDLE_MAX_CREDITS - halfBundleCreditsUsed);
  }, [state.isHalfBundleActive, halfBundleCreditsUsed]);

  const canAddToHalfBundle = useCallback(
    (courseCredits) => {
      if (!state.isHalfBundleActive) return true;
      return totalCredits + courseCredits <= HALF_BUNDLE_MAX_CREDITS;
    },
    [state.isHalfBundleActive, totalCredits]
  );

  const value = {
    selectedCourses: state.selectedCourses,
    sessions: state.sessions,
    isCartOpen: state.isCartOpen,
    isBundleActive: state.isBundleActive,
    isHalfBundleActive: state.isHalfBundleActive,
    bundleYear: state.bundleYear,
    bundleSemester: state.bundleSemester,
    bundleCourseCodes: state.bundleCourseCodes,
    addCourse,
    removeCourse,
    addSession,
    removeSession,
    isSessionSelected,
    getSession,
    setBundleActive,
    setBundleInactive,
    setHalfBundleActive,
    setHalfBundleInactive,
    clearCart,
    toggleCart,
    openCart,
    closeCart,
    isCourseSelected,
    courseCount: state.selectedCourses.length,
    sessionCount: state.sessions.length,
    itemCount,
    courseTotal,
    extraCourseTotal,
    sessionTotal,
    totalPrice,
    totalCredits,
    halfBundleCreditsUsed,
    halfBundleCreditsLeft,
    halfBundleCoveredCodes,
    halfBundleIsFull,
    canAddToHalfBundle,
    HALF_BUNDLE_MAX_CREDITS,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

export default CartContext;
