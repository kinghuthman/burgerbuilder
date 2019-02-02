import React from 'react';
import classes from './Backdrop.module.css'

//click listener helps to remove modal and backdrop
const backdrop = (props) => (
    props.show ? <div className= {classes.Backdrop} onClick={props.clicked}></div> : null
);
export default backdrop ;