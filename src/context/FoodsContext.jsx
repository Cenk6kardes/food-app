import { useContext, useReducer } from "react";
import { createContext } from "react";

const FoodContext = createContext({ mealPieces: 0, meals: [], total: 0 });

function TotalPrice(meals) {
  const total = meals.reduce((total, meal) => {
    return total + meal.price * meal.quantity;
  }, 0);
  return total;
}

function TotalMeals(meals) {
  const total = meals.reduce((total, meal) => {
    return total + meal.quantity;
  }, 0);
  return total;
}

const foodReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      let newMeals;
      const indexOfAddedItem = state.meals.findIndex((meal) => meal.id === action.payload.id);
      if (indexOfAddedItem !== -1) {
        newMeals = [...state.meals];
        newMeals[indexOfAddedItem].quantity++;
      } else {
        newMeals = [...state.meals, { ...action.payload, quantity: 1 }];
      }
      const price = TotalPrice(newMeals);
      const totalMeal = TotalMeals(newMeals);
      return { mealPieces: totalMeal, meals: newMeals, total: price };
    }
    case "DELETE_ITEM": {
      let newMeals = [...state.meals];
      const IndexOfDeletedItem = newMeals.findIndex((meal) => meal.id === action.payload.id);
      if (newMeals[IndexOfDeletedItem].quantity > 1) {
        newMeals[IndexOfDeletedItem].quantity--;
      } else {
        newMeals.splice(IndexOfDeletedItem, 1);
      }
      const price = TotalPrice(newMeals);
      const totalMeal = TotalMeals(newMeals);
      return { mealPieces: totalMeal, meals: newMeals, total: price };
    }
    default:
      return { ...state };
  }
};

export const FoodProvider = ({ children }) => {
  const [state, dispatch] = useReducer(foodReducer, { mealPieces: 0, meals: [], total: 0 });

  return <FoodContext.Provider value={{ state, dispatch }}>{children}</FoodContext.Provider>;
};

export const useFoodContext = () => useContext(FoodContext);
