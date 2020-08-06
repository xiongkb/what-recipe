import React, { Component } from 'react';
import axios from 'axios';
import Navbar from "../../Components/Navbar/navbar";
import RecipeCard from "../../Components/RecipeCard/recipeCard";
import Pot from '../../Components/Pot/pot';
import Footer from '../../Components/Footer/footer';

import "./homepage.css"

class Homepage extends Component {
    // constructor prop to set the state of the ingredients that will update the user's input
    constructor(props) {
        super(props);
        this.state = {
            ingredients: [],
            recipes: [],
            recipeIndex: 0
        }
    }

    text = '';    // user's text

    updateIngredients() {
        const ingredients = [...this.state.ingredients, ...this.getCurrentList()];
        this.setState({ ingredients: ingredients });
        axios.post('http://localhost:3030/edamam/search', { ingredients: ingredients })
            .then(res => {
                this.setState({ recipes: res.data.hits.map(recipeList => recipeList.recipe) })
                console.log(res.data.hits.map(recipeList => recipeList.recipe));
            })
    }

    // function to grab ingredients in the array
    getCurrentList() {
        return this.text.split(',').map(ingredient => ingredient.trim());
    }

    getDisplayedRecipes() {
        const recipes = [];

        if (this.state.recipes.length !== 0) {
            recipes.push(<RecipeCard recipe={this.state.recipes[this.state.recipeIndex]} />);
        }

        if (this.state.recipes.length > this.state.recipeIndex + 1) {
            recipes.push(<RecipeCard recipe={this.state.recipes[this.state.recipeIndex + 1]} />);
        }

        if (this.state.recipes.length > this.state.recipeIndex + 2) {
            recipes.push(<RecipeCard recipe={this.state.recipes[this.state.recipeIndex + 2]} />);
        }

        return recipes;
    }

    moveFoward() {
        if (this.state.recipeIndex + 3 < this.state.recipes.length) {
            this.setState({ recipeIndex: this.state.recipeIndex + 3 })
        }
    }

    moveBackward() {
        if (this.state.recipeIndex - 3 >= 0) {
            this.setState({ recipeIndex: this.state.recipeIndex - 3 })
        }
    }

    clearPan() {
        this.setState({ ingredients: [], recipes: [], recipeIndex: 0 })
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="main-content">
                    {/* <h2>Log in or Sign up to save your favorite recipes!</h2> */}
                    <h2>Enter the ingredients you find to look for recipes!</h2>
                    <div>
                        <div>
                            {/* whatever user enters in input box, it gets valued into text */}
                            <input
                                type="text"
                                placeholder="Apple, Banana, etc,"
                                onChange={e => this.text = e.target.value}
                            />
                            <button onClick={() => this.updateIngredients()}>Add to pan!</button>
                            <button onClick={() => this.clearPan()}>
                                Clear the pan!
                            </button>
                            <Pot ingredients={this.state.ingredients} />
                        </div>

                        <button 
                                disabled={!(this.state.recipeIndex - 3 >= 0)} 
                                onClick={() => this.moveBackward()}
                            >
                                Prev
                        </button>
                        <button
                                disabled={!(this.state.recipeIndex + 3 < this.state.recipes.length)}
                                onClick={() => this.moveFoward()}
                        >
                                Next
                        </button>
                        <div>
                            {/* displaying recipe onto browser */}
                            {this.getDisplayedRecipes()}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Homepage;