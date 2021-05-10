import SortingContainer from "./Containers/SortingContainer"
import ShoppingArea from "./Containers/ShoppingArea"
import CartContainer from "./Containers/CartContainer"
import './App.css';
import React from "react";



class App extends React.Component {

  state = {
    items : [],
    cart : [],
    filter : {
      type : 'all'
    },
  }

  componentDidMount() {
  fetch('http://localhost:3001/items')
    .then(res => res.json())
    .then(shopData => this.handleData(shopData))
  }

  handleData = (shopData) =>{
    this.setState({
      items:shopData
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


render() {
  return (
  <div className="app">
    <div className ="filter"> <SortingContainer filterItem={this.filterItem} onChangeType={this.onChangeType}/></div>
    <div className ="shop"><ShoppingArea itemData={this.state.items} /></div>
    <div className ="cart"><CartContainer/></div>
  </div>);
}
}
export default App;