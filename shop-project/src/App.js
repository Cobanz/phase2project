import ShoppingArea from "./Containers/ShoppingArea"
import CartContainer from "./Containers/CartContainer"
import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./Containers/About"
import ComeBackOlder from "./Containers/ComeBackOlder"
import LandingPage from "./Containers/LandingPage"
import RequestForm from "./Containers/RequestForm"


class App extends React.Component {

  state = {
    items: [],
    cart: [],
    filter: {
      type: 'all'
    },
  }

  componentDidMount() {
    fetch('http://localhost:3001/items')
      .then(res => res.json())
      .then(shopData => this.handleData(shopData))
  }

  handleData = (shopData) => {
    this.setState({
      items: shopData
    })
  }

  filterItem = () => {
    let url = 'http://localhost:3001/items'

    if (this.state.filter.type !== 'all') {
      url += `?type=${this.state.filter.type}`
    }

    fetch(url)
      .then(res => res.json())
      .then(filteredItem => this.setState({ items: filteredItem }))

  }

  onChangeType = ({ target: { value } }) => {
    this.setState({ filter: { type: value } })
  }

  addToCart = (clickedItem) => {
    console.log("pick me pick me")
    if (!this.state.cart.find(alreadyClickedItem => clickedItem === alreadyClickedItem))
      this.setState({ cart: [...this.state.cart, clickedItem] })

  }

  removeFromCart = (clickedItem) => {
    console.log("fine i dont like you anyway")
    this.setState({ cart: this.state.cart.filter(oldItem => oldItem !== clickedItem) })
  }

requestItem = (newItem) => {
  let postOptions = {
    method: "POST",
    headers :{
      "Content-Type": 'application/json',
      Accepts: 'application/json'
    },
    body: JSON.stringify(newItem)
  }
  fetch('http://localhost:3001/items', postOptions)
  .then(res=>res.json())
  .then(addedItem => this.setState({items:[...this.state.items, addedItem]}))

}




  render() {
    return (

      <div className="app">
       <Router>
      <div>
        <nav className="nav-bar">
          <ul className="nav-bar-ul">
            <li className="nav-bar-li a">
              <Link to="/">LandingPage</Link>
            </li>
            <li className="nav-bar-li a">
              <Link to="/about">About</Link>
            </li>
            <li className="nav-bar-li a">
              <Link to="/store">Store</Link>
            </li>
            <li className="nav-bar-li a">
              <Link to="/notOldEnough">JokesOnYou</Link>
            </li>
            <li className="nav-bar-li a">
              <Link to="/cart">Checkout</Link>
            </li>
            <li className="nav-bar-li a">
              <Link to="/request">Something Missing?</Link>
            </li>
          </ul>
        </nav>

       
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/cart">
          <CartContainer removeFromCart={this.removeFromCart} itemData={this.state.cart} />
          </Route>
          <Route exact path="/notOldEnough">
            <ComeBackOlder />
          </Route>
          <Route exact path="/store">
          <ShoppingArea itemData={this.state.items} addToCart={this.addToCart} filterItem={this.filterItem} onChangeType={this.onChangeType}/>
          </Route>
          <Route exact path="/">
            <LandingPage />
          </Route>
         
          <Route exact path="/request"> 

            <RequestForm requestItem={this.requestItem}/>
           
          </Route>
        </Switch>
      </div>
    </Router>
        
      </div>);


  }

}
export default App;

