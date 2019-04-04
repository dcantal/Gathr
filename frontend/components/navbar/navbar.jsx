import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
 

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false,
        };
        
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }


    showMenu(event) {
        event.preventDefault();

        this.setState({
            showMenu: true,
        }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu() {
        this.setState({ showMenu: false }, () => {
            document.removeEventListener('click', this.closeMenu);
        });

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
                <div className="profile-pic-menu">
                    <img className="button-to-menu profile-pic" 
                        src="https://secure.gravatar.com/avatar/b91e3eff4d79f02620073df23d39a8da?secure=true&size=300" 
                        onClick={this.showMenu}>
                    </img>
                    {
                    this.state.showMenu
                        ? (
                        <div className="navbar-dropdown">
                            <div className="dropdown-left">
                                <ul className="nav-account-groups">
                                    <li>Test Group 1</li>
                                    <li>Test Group 2</li>
                                    <li>Test Group 3</li>
                                </ul>
                            </div>
                            <div className="dropdown-right">
                                <ul className="nav-account-links">
                                    <button className="header-button first-button" onClick={this.props.logout}>Profile</button>
                                    <button className="header-button" onClick={this.props.logout}>Settings</button>
                                    <button className="header-button" onClick={this.props.logout}>Log Out</button>
                                </ul>
                            </div>
                        </div>
                        )
                        : (
                            null
                        )
                    }
                </div>
            </hgroup>
        );
        debugger
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