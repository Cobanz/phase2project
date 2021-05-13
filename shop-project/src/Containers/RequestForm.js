import React from 'react';


class RequestForm extends React.Component {
    state = {
        name: "",
        image: "",
        description: "",
        type: "Other",
        quantity: "1"
    }


    onSubmit = (e) => {
        e.preventDefault()
        this.props.requestItem(this.state)


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

    onNewQuantity = event => {
        this.setState({
            quantity: event.target.value
        })
    }

    onNewType = event => {
        this.setState({
            type: event.target.value
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
                    <select onChange={this.onNewQuantity} value={this.state.quantity}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                    <select onChange={this.onNewType} value={this.state.type}> Type:
                    <option value="Other">Other</option>
                        <option value="Whiskey">Whiskey</option>
                        <option value="Vodka">Vodka</option>
                        <option value="Gin">Gin</option>
                        <option value="Wine">Wine</option>
                        <option value="Tequila">Tequila</option>
                        <option value="Beer">Beer</option>
                    </select>


                    <input type="submit" name="submit" value="Add Missing Item" className="submit" />
                </form>
            </div>
        );
    }

}

export default RequestForm;
