import React, { Component } from 'react';
import Aux from '../../hoc/Aux';

class BurgerBuilder extends Component {
    render(){
        return(
            <Aux>
                <div>Burger</div> {/*graphic representation of burger that was built*/}
                <div>Build Controls</div> {/*area to add and remove ingredients*/}
            </Aux>
        );
    }

} 

export default BurgerBuilder;