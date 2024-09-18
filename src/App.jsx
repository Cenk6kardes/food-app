import Foods from "./components/Foods/foods";
import Header from "./components/Header/Header";
import { FoodProvider } from "./context/FoodsContext";

function App() {
  return (
    <>
      <FoodProvider>
        <Header />
        <Foods />
      </FoodProvider>
    </>
  );
}

export default App;
