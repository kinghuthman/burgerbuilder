import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

//array to loop build controls
const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
];

/*inside the div loop through all the controls 
render a build control for each one,
call map on controls to access array 
and map each 'ctrl' into a self closing <BuildControl />
set key to the label as its a unique identifier
also pass label(like props) to the buildcontrol component label
receieved added props from parent BurgerBuilder
receieved removed props from parent BurgerBuilder
need to be aware of what type the buildcontrol has, use a es6 to callback ctrl.type through handler
*/
const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p> {/*totalPrice from our state*/}
        {controls.map(ctrl => (
            <BuildControl 
            key={ctrl.label} 
            label={ctrl.label} 
            added={() => props.ingredientAdded(ctrl.type)}
            removed={() => props.ingredientRemoved(ctrl.type)}
            disabled={props.disabled[ctrl.type]} /> 
        ))}
        <button 
        className={classes.OrderButton}
        disabled={!props.purchasable}>ORDER NOW</button>
    </div>
    
);
export default buildControls;