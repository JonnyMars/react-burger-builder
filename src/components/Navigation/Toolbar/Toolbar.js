import React from 'react'
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import classes from "./Toolbar.css";

export default function Toolbar({drawerToggleClicked, isAuth}) {
    return (
        <header className={classes.Toolbar}>
            <DrawerToggle clicked={drawerToggleClicked} />
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav className={classes.DesktopOnly}>
                <NavigationItems isAuth={isAuth} />
            </nav>
        </header>
    )
}
