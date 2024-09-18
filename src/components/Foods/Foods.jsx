import Food from "./Food";
import { useFetch } from "../fetch/useFetch";
import { fetchAvailableMeals } from "../fetch/http";

function Foods({}) {
  const { isLoading, data: availableMeals, error } = useFetch(fetchAvailableMeals, []);
  let content;
  if (!isLoading && !error) {
    content = (
      <div id="meals">
        {availableMeals.map((meal) => (
          <Food meal={meal} key={'am'+meal.id} />
        ))}
      </div>
    );
  } else if (isLoading) {
    content = <p>Fetching Available Data...</p>;
  } else {
    content = <p>{error.message}</p>;
  }

  return <>{content}</>;
}

export default Foods;
