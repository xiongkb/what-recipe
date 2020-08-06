import React, { Component } from "react";
import  "./recipeCard.css";

class RecipeCard extends Component {
    render() {
        return (
            <div>
                <h4>{this.props.recipe.label}</h4>
                <p>{this.props.recipe.ingredientLines.map(ingredient => <div>{ingredient}</div>)}</p>
                <a target="_blank" rel="noopener noreferrer" href={this.props.recipe.url}>Source for Instructions</a>
            </div>
        )
    }
}

export default RecipeCard;