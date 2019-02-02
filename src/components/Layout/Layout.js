import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = ( props ) => (
    <Aux>
        <Toolbar/>
                   <main className={classes.Content}> 
                {props.children} 
            </main>
    </Aux>
             /* {props.children} outputs the component we wrap with this layout,
            this allows us to use this layout component as a wrapper as the core 
            content component we want to render on the screen */
    
);

export default layout;