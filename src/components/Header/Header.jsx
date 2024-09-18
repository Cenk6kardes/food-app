import Modal from "./Modal.jsx";
import logo from "../../assets/logo.jpg";
import { useFoodContext } from "../../context/FoodsContext";
import { useState } from "react";
import Cart from "./Cart.jsx";
import Checkout from "./Checkout.jsx";
function Header() {
  const { state, dispatch } = useFoodContext();
  const [checkOutModal, setCheckoutModal] = useState("");
  const buttonContext = state.mealPieces === 0 ? "Cart" : `Cart(${state.mealPieces})`;

  function addItem(meal) {
    dispatch({ type: "ADD_ITEM", payload: meal });
  }
  function deleteItem(meal) {
    dispatch({ type: "DELETE_ITEM", payload: meal });
  }

  return (
    <>
      {checkOutModal && (
        <Modal open={checkOutModal} onClose={() => setCheckoutModal("")}>
          {checkOutModal === "CART" && (
            <Cart
              closeModal={() => setCheckoutModal("")}
              addItem={addItem}
              deleteItem={deleteItem}
              meals={state.meals}
              total={state.total}
              goCheckout={() => setCheckoutModal("CHECKOUT")}
            ></Cart>
          )}
          {checkOutModal === "CHECKOUT" && (
            <Checkout
              onClose={() => {
                setCheckoutModal("");
              }}
            ></Checkout>
          )}
        </Modal>
      )}
      <div id="main-header">
        <div id="title">
          <img src={logo} alt="logo" />
          <h1 id="title">React Food App</h1>
        </div>
        <button onClick={() => setCheckoutModal("CART")} className="text-button">
          {buttonContext}
        </button>
      </div>
    </>
  );
}

export default Header;
