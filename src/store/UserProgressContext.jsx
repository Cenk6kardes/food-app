import { createContext, useState } from "react";

const UserProgressContext = createContext({
  progress: "",
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {}
});

export function UserProgressContextProvider({ children }) {
  const [userProgress, setUserProgres] = useState("");

  function showCart() {
    setUserProgres("cart");
  }
  function hideCart() {
    setUserProgres("");
  }
  function showCheckout() {
    setUserProgres("checkout");
  }
  function hideCheckout() {
    setUserProgres("");
  }

  const userProgressCtx = {
    progress: userProgress,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout
  };
  return <UserProgressContext.Provider value={userProgressCtx}>{children}</UserProgressContext.Provider>;
}

export default UserProgressContext;
