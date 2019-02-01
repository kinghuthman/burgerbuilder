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
*/
const buildControls = (props) => (
    <div className={classes.BuildControls}>
        {controls.map(ctrl => (
            <BuildControl key={ctrl.label} label={ctrl.label} />
        ))}
    </div>
    
);
export default buildControls;