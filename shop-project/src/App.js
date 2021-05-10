import SortingContainer from "./Containers/SortingContainer"
import ShoppingArea from "./Containers/ShoppingArea"
import CartContainer from "./Containers/CartContainer"
import './App.css';

function App() {
  return (
  <div class="app">
    <div class ="filter"> <SortingContainer/></div>
    <div class ="shop"><ShoppingArea/></div>
    <div class ="cart"><CartContainer/></div>
  </div>);
}

export default App;
