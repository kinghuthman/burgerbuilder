import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    const transformedIngredients = Object.keys(props.ingredients)//object is default js, has a keys method that extracts the keys of an object and turns into an array, not the values
        .map(igKey => { 
        /*exectutes a function on each element on input array, "igKey" is random name to describe ingredient props from state
        transform string value into array into as many elements as we have ingredients for the given ingredient 
        spread operator spreads new array that needs to be contructed, 
        constructed with Array() method from js, Arrray() inside parenthesis array determined by props,
        key is accessed with igKey as we are still in the map function that contains all the keys,
        execute map on that array, underscore for argument name, index is what we care about
        return burgerigredient in that method where we set the key to the ingredient key "igkey"(salad, meat) and the ingredient value to "i"(1,2) 
        keys we use must match ingredients*/    
        return [...Array(props.ingredients[igKey])].map((_, i) => {
           return <BurgerIngredient key={igKey + i} type={igKey} />;
        })
        ;
        });
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/> {/* child component, type refers to each case created*/}
            {transformedIngredients} {/*ingredients will always change where as burgertop and bottom is needed*/}
            <BurgerIngredient type="bread-bottom"/>  {/* must be a string as thats what we determined via prototype*/}
        </div> /*deliberately a div to give this a wrapper styling */
    );
};

export default burger;