import React, { Component } from "react";
import  "./recipeCard.css";

class RecipeCard extends Component {
    render() {
        return (
            <div>
                <h4>{this.props.recipe.label}</h4>
        <p>{this.props.recipe.ingredientLines.map(ingredient => <div>{ingredient}</div>)}</p>
            </div>
        )
    }
}

export default RecipeCard;