import React, { Component } from 'react';
import Navbar from "../../Components/Navbar/navbar";
import RecipeCard from "../../Components/RecipeCard/recipeCard";

class Homepage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <h2>Log in or Sign up to save your favorite recipes!</h2>
                <div>
                    <input type="text" placeholder="Enter an ingredient"></input>
                    <button>Add to pot!</button>
                    <RecipeCard />
                </div>
            </div>
        )
    }
}

export default Homepage;