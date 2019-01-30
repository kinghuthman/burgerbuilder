import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    // constructor(props) { /*another approach on how to set up our state*/
    //     super(props);
    //     this.state = {...}
    // }
    
    state = {
        ingredients: { //key value pairs for ingredients object, keys are name of ingreident, value is amount
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2

        }
    }

    render(){
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/> {/*graphic representation of burger that was built*/}
                <div>Build Controls</div> {/*area to add and remove ingredients*/}
            </Aux>
        );
    }

} 

export default BurgerBuilder;