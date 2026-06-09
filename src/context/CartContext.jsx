import { createContext, useContext, useReducer, useCallback } from "react";

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
    case "CLEAR_CART":
      return { ...state, selectedCourses: [] };
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
};

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addCourse = useCallback((course) => {
    dispatch({ type: "ADD_COURSE", payload: course });
  }, []);

  const removeCourse = useCallback((courseCode) => {
    dispatch({ type: "REMOVE_COURSE", payload: courseCode });
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

  const value = {
    selectedCourses: state.selectedCourses,
    isCartOpen: state.isCartOpen,
    addCourse,
    removeCourse,
    clearCart,
    toggleCart,
    openCart,
    closeCart,
    isCourseSelected,
    courseCount: state.selectedCourses.length,
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
