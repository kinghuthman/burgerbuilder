import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/> {/* child component, type refers to each case created*/}
            <BurgerIngredient type="cheese"/> {/* must be a string as thats what we determined via prototype*/}
            <BurgerIngredient type="meat"/>
            <BurgerIngredient type="bread-bottom"/>
        </div> /*deliberately a div to give this a wrapper styling */
    );
};

export default burger;