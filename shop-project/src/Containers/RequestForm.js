import React from 'react';


class RequestForm extends React.Component {
  state = {
    name: "",
    image: "",
    description: ""
  }


  onSubmit = (e) => {
    e.preventDefault()
    this.props.addedItem(this.state)

  }

  onNewName = event => {
    this.setState({
      name: event.target.value
    })
  }

  onNewImage = event => {
    this.setState({
      image: event.target.value
    })
  }

  onNewDescription = event => {
      this.setState({
          description: event.target.value
      })
  }


  render() {
    return (
      <div className="container">
        <form className="add-toy-form" onSubmit={this.onSubmit}>
          <h3>Add A Missing Item</h3>
          <input type="text" name="name" placeholder="Enter a item's name..." className="input-text" onChange={this.onNewName} value={this.state.name} />
          <br />
          <input type="text" name="image" placeholder="Enter a item's image URL..." className="input-text" onChange={this.onNewImage} value={this.state.image} />
          <br />
          <input type="text" name="description" placeholder="Enter a items description..." className="input-text" onChange={this.onNewDescription} value={this.state.description} />
          <br />
          <input type="submit" name="submit" value="Add Missing Item" className="submit" />
        </form>
      </div>
    );
  }

}

export default RequestForm;
