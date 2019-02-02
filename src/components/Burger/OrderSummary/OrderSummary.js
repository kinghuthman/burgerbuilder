import React from 'react';
import Aux from '../../../hoc/Aux';

/*title, short text, list of items, price, continue to checkout? and buttons,
no need for wrapping element so import Aux no div,
create const for ingredientSumarry to make a dynamic listed display of ingredients in burger,
map into array of jsx elements.. return the list item
get ingredient name for list by calling igKey and the value by using annotation[] and props,
use span to out put name with uppercase to use inline styling
double curly braces for marking a dynamic entry an inner for js object

*/
const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key = {igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
                </li>);
        });
    
    return(
        <Aux>
            <h3> Your Order</h3>
            <p>A delivious burger with the folllowing ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p> Continue to Checkout?</p>
        </Aux>
    )

};

export default orderSummary;