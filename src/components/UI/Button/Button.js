import React from 'react';
import classes from './Button.module.css';


/*props.children here use button like a normal button and simply wrap the content
which should go inside with my custom button element
add an array to assign the button class but conditionally dd the other classes
dynamically pull out a certain type with props button type
what we pass to clas has to be a string, 
.join(' ') join them with a whitespace to have a list of classes which is a string in the end
*/
const button = (props) => (
    <button
    className={[classes.Button, classes[props.btnType]].join(' ')}
    onClick={props.clicked}>{props.children}</button>
);
export default button;