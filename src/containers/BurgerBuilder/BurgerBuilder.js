import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    render(){
        return(
            <Aux>
                <Burger /> {/*graphic representation of burger that was built*/}
                <div>Build Controls</div> {/*area to add and remove ingredients*/}
            </Aux>
        );
    }

} 

export default BurgerBuilder;