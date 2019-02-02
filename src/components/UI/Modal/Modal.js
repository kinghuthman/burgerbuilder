import React from 'react';
import classes from './Modal.module.css'
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

/*props is passed so any children rendered inside of modal in our burgerbuilder 
can have access to props as well
aux wraps multiple elements,
backdrop displayed here as it should be displayed with modal
clicked property receives props modalClosed from burgerbuilder that relays info to backdrop*/
const  modal = (props) => (
    <Aux>
        <Backdrop show={props.show} clicked={props.modalClosed}/>
        <div 
            className={classes.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vH)',
                opacity: props.show ? '1' : '0'
            }}>
            {props.children}
        </div>
    </Aux>
);
export default modal;