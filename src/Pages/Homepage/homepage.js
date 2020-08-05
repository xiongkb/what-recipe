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
        this.state = { ingredients: [] }
    }

    text = '';    // user's text

    updateIngredients() {
        const ingredients = [...this.state.ingredients, ...this.getCurrentList()];
        this.setState({ ingredients: ingredients });
        axios.post('http://localhost:3030/edamam/search', { ingredients: ingredients})
            .then(res => {
                console.log(res.data);
            })
    }

    // function to grab ingredients in the array
    getCurrentList() {
        return this.text.split(',').map(ingredient => ingredient.trim());
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="main-content">
                    <h2>Log in or Sign up to save your favorite recipes!</h2>
                    <div>
                        <div>
                            {/* whatever user enters in input box, it gets valued into text */}
                            <input
                                type="text"
                                placeholder="Enter an ingredient"
                                onChange={e => this.text = e.target.value}
                            />
                            <button
                                onClick={() => this.updateIngredients()}
                            >
                                Add to pot!
                            </button>
                            <Pot ingredients={this.state.ingredients} />
                        </div>
                        <RecipeCard />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Homepage;