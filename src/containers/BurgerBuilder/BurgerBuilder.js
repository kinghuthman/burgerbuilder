import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

//global const tends to be all caps
const INGREDIENT_PRICES =  {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3, 
    bacaon: 0.7,
}
class BurgerBuilder extends Component {
    // constructor(props) { /*another approach on how to set up our state*/
    //     super(props);
    //     this.state = {...}
    // }
    
    state = {
        ingredients: { //key value pairs for ingredients object, keys are name of ingreident, value is amount
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4
    }

    /*need old count, calculate updated count, oldCount + 1, 
    update ingredients state should be updated in an immutable way, 
    ... distributes the propertiess of the old ingredient state into the object,
    take updatedIngredients, access type and set count to updatedCount,
    update total price with ingredients added: 
     - priceAddition is Ingredient_prices for a given type since using same type everywhere else in app
     - for that type we can fetch the price,
     - take oldPrice and set newPrice equal to oldPrice + priceAddition
     - call setstate and set totalPrice to newPrice & ingredients to updatedPrice*/
    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount +1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type] ;
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    }

    render(){
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/> {/*graphic representation of burger that was built*/}
                <BuildControls //area to add and remove ingredients
                ingredientAdded={this.addIngredientHandler}/> {/*ingredientAdded holds reference to addIngredientHandler*/}
            </Aux>
        );
    }

} 

export default BurgerBuilder;