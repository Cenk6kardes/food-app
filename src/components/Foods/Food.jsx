import { useFoodContext } from "../../context/FoodsContext";

function Food({ meal }) {
  const { description, image, name, price } = meal;
  const { state, dispatch } = useFoodContext();

  function addToCart(meal) {
    dispatch({
      type: "ADD_ITEM",
      payload: meal
    });
  }
  return (
    <>
      <div className="meal-item">
        <img src={`http://localhost:3000/${image}`} alt="meal" />
        <h3>{name}</h3>
        <p className="meal-item-price ">${price}</p>
        <p className="meal-item-description">{description}</p>
        <button onClick={() => addToCart(meal)} className="button">
          Add to Cart
        </button>
      </div>
    </>
  );
}

export default Food;
