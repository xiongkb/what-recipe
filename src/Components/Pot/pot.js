import React, { Component } from 'react';

class Pot extends Component {
    render() {
        return (
            <div>{this.props.ingredients.map(ingredient => <div>{ingredient}</div>)}</div>
        )
    }
}

export default Pot;