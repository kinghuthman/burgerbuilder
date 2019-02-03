import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

//global const tends to be all caps
const INGREDIENT_PRICES =  {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3, 
    bacon: 0.7
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
        totalPrice: 4,
        purchasable: false,
        purchasing: false //changes to true when order now button has been clicked
    }
    /*method is called after add and removed handler to check whether or not to turn purchasable to true or false,
    check the ingredients we have in state by creating a copy 'const ingredients = {...this.state.ingredients}
    add up all the values of ingredients by turning object into an array 'const sum', that gives you the key, 
    use map method to map into array to get each key, with ingredients and this notation [] we are accessing a certain property
    igKey = meats, salad, bacon...
    call reduce to reduce the array into a single number, start with 0 then function is executed on each element in this mapped array
    sum is the updated result of the element we accessed from ingredients[igkey] + the start of the function 0, 
    which is now constantly updated to reflect those two added together
    call setState and set purchaseable to sum > 0
    pass ingredients that we get from updatedIngredients using add and remove methods? 
    now ingredients becomes updatedIngredients?*/
    updatePurchaseState (ingredients) {
        const sum = Object.keys( ingredients )
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, el) =>{
                return sum + el;
            }, 0);
            this.setState({purchasable:sum > 0});
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
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    //used addIngredient logic, used subtraction where necessary
    //should check if we have ingredients to remove
    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type] ;
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    /*triggered when order now button is clicked
    set state of purchasing to true*/
    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    //triggererd when backdrop is clicked
    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        alert('You Continue!');
    }
    /* which button should be enabled and disabled?
    a new const is created disbledInfo where we want to create a
    new object to distribute the props of  this.state.ingredients(immutable),
    for in loop to loop through all the keys to check if theres 0 or less,
    returns true or false for each type,
    */
    render(){
        const disabledInfo = {
            ...this.state.ingredients
        };
        for ( let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        // {salad: true, meat: false, ...}
        return(
            <Aux>
            <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}> {/*only if purchasing is true, the modal is visible, 
                show is just a random name i picked, backdrop/modal is gone when modalClosed is set to true */}
                    <OrderSummary 
                    ingredients={this.state.ingredients}
                    price={this.state.totalPrice}
                    purchaseCancelled={this.purchaseCancelHandler}
                    purchaseContinued={this.purchaseContinueHandler}/> {/* pass ingredients*/}
                </Modal>
                <Burger ingredients={this.state.ingredients}/> {/*graphic representation of burger that was built*/}
                <BuildControls //area to add and remove ingredients
                    ingredientAdded={this.addIngredientHandler} //ingredientAdded holds reference to addIngredientHandler
                    ingredientRemoved={this.removeIngredientHandler}//ingredientRemoved holds reference to removeIngredientHandler
                    disabled= {disabledInfo} //true or false, disables buttons if not needed
                    purchasable={this.state.purchasable} //lets us know if ingredients have been selected to burger, making it able to buy
                    ordered={this.purchaseHandler}
                    price={this.state.totalPrice}/> 
            </Aux>
        );
    }

} 

export default BurgerBuilder;