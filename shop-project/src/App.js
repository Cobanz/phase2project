import SortingContainer from "./Containers/SortingContainer"
import ShoppingArea from "./Containers/ShoppingArea"
import CartContainer from "./Containers/CartContainer"
import './App.css';
import React from "react";



class App extends React.Component {

  state = {}

  componentDidMount() {
  fetch('http://localhost:3001/toys')
    .then(res => res.json())
    .then(shopData => console.log(shopData))
  }



render() {
  return (
  <div className="app">
    <div className ="filter"> <SortingContainer/></div>
    <div className ="shop"><ShoppingArea/></div>
    <div className ="cart"><CartContainer/></div>
  </div>);
}
}
export default App;


