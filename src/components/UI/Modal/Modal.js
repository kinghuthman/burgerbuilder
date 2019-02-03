import React, { Component } from 'react';
import classes from './Modal.module.css'
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

/*props is passed so any children rendered inside of modal in our burgerbuilder 
can have access to props as well
aux wraps multiple elements,
backdrop displayed here as it should be displayed with modal
clicked property receives props modalClosed from burgerbuilder that relays info to backdrop*/
class Modal extends Component{

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show
    }

    componentWillUpdate () {
        console.log('[modal] WillUPDATE')
    }
    render (){
        return (
            <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
        <div 
            className={classes.Modal}
            style={{
                transform: this.props.show ? 'translateY(0)' : 'translateY(-100vH)',
                opacity: this.props.show ? '1' : '0'
            }}>
            {this.props.children}
        </div>
    </Aux>

        )
    }
}
export default Modal;