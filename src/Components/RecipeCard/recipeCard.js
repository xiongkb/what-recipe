import React, { Component } from "react";
import  "./recipeCard.css";

class RecipeCard extends Component {
    render() {
        return (
            <div className="recipe-card">
                <h4 className="recipe-name">
                    {this.props.recipe.label}
                </h4>
                <p className="recipe-ingredients">
                    {this.props.recipe.ingredientLines.map(ingredient => <li>{ingredient}</li>)}
                </p>
                <a target="_blank" rel="noopener noreferrer" href={this.props.recipe.url} className="recipe-url">
                    Source for Instructions
                </a>
            </div>
        )
    }
}

export default RecipeCard;