import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
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

        }
    }

    render(){
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/> {/*graphic representation of burger that was built*/}
                <BuildControls /> {/*area to add and remove ingredients*/}
            </Aux>
        );
    }

} 

export default BurgerBuilder;