import React, { Component } from 'react';
import Navbar from "../../Components/Navbar/navbar";
import RecipeCard from "../../Components/RecipeCard/recipeCard";
import Pot from '../../Components/Pot/pot';

class Homepage extends Component {
    // constructor prop to set the state of the ingredients that will update the user's input
    constructor(props) {
        super(props);
        this.state = { ingredients: [] }
    }

    text = '';    // user's text

    // function to grab ingredients in the array
    getCurrentList() {
        return this.text.split(',').map(ingredient => ingredient.trim());
    }

    render() {
        return (
            <div>
                <Navbar />
                <h2>Log in or Sign up to save your favorite recipes!</h2>
                <div style={{ display: 'flex' }}>
                    <div>
                        {/* whatever user enters in input box, it gets valued into text */}
                        <input 
                            type="text" 
                            placeholder="Enter an ingredient" 
                            onChange={e => this.text = e.target.value} 
                        />
                        <button 
                            onClick={() => this.setState({
                                ingredients: [...this.state.ingredients, ...this.getCurrentList()]
                            })}
                        >
                            Add to pot!
                        </button>
                        <RecipeCard />
                    </div>
                    <Pot ingredients={this.state.ingredients} />
                </div>
            </div>
        )
    }
}

export default Homepage;