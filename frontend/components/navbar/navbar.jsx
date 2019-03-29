import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
 
import NavbarDropdown from './navbar_dropdown';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.renderDropdown = this.renderDropdown.bind(this);
    }

    renderDropdown(){
        return (
            <NavbarDropdown />
        );
    }

    render() {
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
                {/* <h2 className="header-name">Hi, {currentUser.username}!</h2> */}
                <img className="profile-pic" src="https://secure.gravatar.com/avatar/b91e3eff4d79f02620073df23d39a8da?secure=true&size=300" onClick={this.renderDropdown}></img>
                <button className="header-button" onClick={this.props.logout}>Log Out</button>
            </hgroup>
        );

        return this.props.currentUser ? personalGreeting() : sessionLinks();
    }

}

// const NavBar = ({ currentUser, logout }) => {
//     const sessionLinks = () => (
//         <nav className="new-group-login-signup">
//             <Link className="new-group-link" to="/groups/new">Start a new group</Link>
//             <nav className="login-signup">
//                 <Link to="/login">Login</Link>
//                 &nbsp;&nbsp;&nbsp;&nbsp;
//                 <Link to="/signup">Sign up</Link>
//             </nav>
//         </nav>
//     );
//     const personalGreeting = () => (
//         <hgroup className="header-group">
//             <Link className="new-group-link" to="/groups/new">Start a new group</Link>
//             {/* <h2 className="header-name">Hi, {currentUser.username}!</h2> */}
//             <img className="profile-pic" src="https://secure.gravatar.com/avatar/b91e3eff4d79f02620073df23d39a8da?secure=true&size=300"></img>
//             <button className="header-button" onClick={logout}>Log Out</button>
//         </hgroup>
//     );

//     return currentUser ? personalGreeting() : sessionLinks();
// };


export default NavBar;