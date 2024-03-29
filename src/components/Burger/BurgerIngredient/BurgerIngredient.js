import React, { Component } from 'react';
import classes from './BurgerIngredient.module.css';
import PropTypes from 'prop-types';

class BurgerIngredient extends Component{
    render() {
        let ingredient = null; /* logic needed to render different types of ingredients via props*/

    switch(this.props.type) { /* analyze type of ingredeint, type is property expected to be received*/
        case ('bread-bottom'):
            ingredient = <div className={classes.BreadBottom}></div>;
            break;
        case ('bread-top'):
            ingredient = (
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
            );
            break;
        case ('meat'):
            ingredient = <div className={classes.Meat}></div>;
            break;
        case ('cheese'):
            ingredient = <div className={classes.Cheese}></div>;
            break;
        case ('salad'):
            ingredient = <div className={classes.Salad}></div>;
            break;
        case ('bacon'):
            ingredient = <div className={classes.Bacon}></div>;
            break;
        default:
            ingredient = null;
    }
    return ingredient; //either null or an ingredient
    }
}

export default BurgerIngredient;

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired //if we ever use the ingredient component without passing a type we get an error
}

