import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component{
    state = {
        showSideDrawer: true
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }
    render(){
        return (
            <Aux>
        <Toolbar/>
        <SideDrawer open={this.state.showSideDrawer}closed={this.sideDrawerClosedHandler}/>
                   <main className={classes.Content}> 
                {this.props.children} 
            </main>
    </Aux>
             /* {props.children} outputs the component we wrap with this layout,
            this allows us to use this layout component as a wrapper as the core 
            content component we want to render on the screen */

        )
    }
} ;

export default Layout;