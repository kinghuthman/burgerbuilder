import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)//object is default js, has a keys method that extracts the keys of an object and turns into an array, not the values
        .map(igKey => { 
        /*exectutes a function on each element on input array, "igKey" is random name to describe ingredient props from state
        transform string value into array into as many elements as we have ingredients for the given ingredient 
        spread operator spreads new array that needs to be contructed, 
        constructed with Array() method from js, Arrray() inside parenthesis array determined by props,
        key is accessed with igKey as we are still in the map function that contains all the keys,
        execute map on that array, underscore for argument name, index is what we care about
        return burgerigredient in that method where we set the key to the ingredient key "igkey"(salad, meat) and the ingredient value to "i"(1,2) 
        keys we use must match ingredients, type refers to propType we created for burgeringredients component*/    
        return [...Array(props.ingredients[igKey])].map((_, i) => {
           return <BurgerIngredient key={igKey + i} type={igKey} />;
            });
        })
        .reduce((arr, el) =>{
            return arr.concat(el)
        }, []);
        if (transformedIngredients.length === 0) {
            transformedIngredients = <p>Please start adding ingredients!</p>
        }
        console.log(transformedIngredients);
        /*flatten array to display transformed ingredients
        reduce() built in array function, transform an array into something else
        takes a function as input and takes two arguments, the previous value and current value
        callback {} is executed on every element within the array
        also excepts an intial value like an array, intial value of the reduced value,
        adjust reduced value by returning something in the callback
        that will loop through all elements and add them to initial value step by step,
        the updated value starting with initial is stored in "arr" arguement 
        the always updated root array that is returned in the end,
        concat will taken the given element we're looping and add it to the array,
        added if statement in case no ingredients have been selected.
        */
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/> {/* child component, type refers to each case created*/}
            {transformedIngredients} {/*ingredients will always change where as burgertop and bottom is needed*/}
            <BurgerIngredient type="bread-bottom"/>  {/* must be a string as thats what we determined via prototype*/}
        </div> /*deliberately a div to give this a wrapper styling */
    );
};

export default burger;