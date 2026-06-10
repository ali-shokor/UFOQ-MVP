import { createContext, useContext, useReducer, useCallback, useMemo } from "react";

const CartContext = createContext(null);

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
    case "SET_BUNDLE_ACTIVE":
      return { ...state, selectedCourses: action.payload, isBundleActive: true };
    case "SET_BUNDLE_INACTIVE":
      return { ...state, isBundleActive: false };
    case "CLEAR_CART":
      return { ...state, selectedCourses: [], isBundleActive: false };
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
  isCartOpen: false,
  isBundleActive: false,
};

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addCourse = useCallback((course) => {
    dispatch({ type: "ADD_COURSE", payload: course });
  }, []);

  const removeCourse = useCallback((courseCode) => {
    dispatch({ type: "REMOVE_COURSE", payload: courseCode });
  }, []);

  const setBundleActive = useCallback((courses) => {
    dispatch({ type: "SET_BUNDLE_ACTIVE", payload: courses });
  }, []);

  const setBundleInactive = useCallback(() => {
    dispatch({ type: "SET_BUNDLE_INACTIVE" });
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
    (courseCode) => {
      return state.selectedCourses.some((c) => c.code === courseCode);
    },
    [state.selectedCourses]
  );

  const totalPrice = useMemo(() => {
    return state.selectedCourses.reduce((sum, c) => sum + (c.price || 0), 0);
  }, [state.selectedCourses]);

  const value = {
    selectedCourses: state.selectedCourses,
    isCartOpen: state.isCartOpen,
    isBundleActive: state.isBundleActive,
    addCourse,
    removeCourse,
    setBundleActive,
    setBundleInactive,
    clearCart,
    toggleCart,
    openCart,
    closeCart,
    isCourseSelected,
    courseCount: state.selectedCourses.length,
    totalPrice,
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
