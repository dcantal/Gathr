import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';



const NavBar = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav className="new-group-login-signup">
            <Link className="new-group-link" to="/groups/new">Start a new group</Link>
            <nav className="login-signup">
                <Link to="/login">Login</Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/signup">Sign up</Link>
            </nav>
        </nav>
    );
    const personalGreeting = () => (
        <hgroup className="header-group">
            <Link className="new-group-link" to="/groups/new">Start a new group</Link>
            <h2 className="header-name">Hi, {currentUser.username}!</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};


export default NavBar;