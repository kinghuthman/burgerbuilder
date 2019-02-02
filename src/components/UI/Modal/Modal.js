import React from 'react';
import classes from './Modal.module.css'

/*props is passed so any children rendered inside of modal in our burgerbuilder 
can have access to props as well*/
const  modal = (props) => (
    <div className={classes.Modal}
    style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vH)',
        opacity: props.show ? '1' : '0'
    }}>
        {props.children}
    </div>
);
export default modal;