/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

function Cart({ meals, total, addItem, deleteItem, closeModal, goCheckout }) {
  return (
    <>
      <div className="cart">
        <h2>Your Cart</h2>
        <ul>
          {meals.map((meal) => {
            return (
              <li className="cart-item" key={meal.id}>
                {meal.name}-{meal.quantity} x ${meal.price}
                <div className="cart-item-actions">
                  <button onClick={() => deleteItem(meal)}>-</button>
                  {meal.quantity}
                  <button onClick={() => addItem(meal)}>+</button>
                </div>
              </li>
            );
          })}
          <p className="cart-total">${total}</p>
          <div className="modal-actions">
            <button onClick={closeModal} className="text-button">
              Close
            </button>
            <button disabled={meals.length === 0} onClick={goCheckout} className="button">
              Go To Checkout
            </button>
          </div>
        </ul>
      </div>
    </>
  );
}

export default Cart;
