import React from 'react';
import { Link } from 'react-router-dom';
// import meetupvideo from '../../../app/assets/videos/meetupbanner.mp4';

class NavbarDropdown extends React.Component {

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
        return (
            <div className="profile-pic-menu">
                <button className="button-to-menu" onClick={this.showMenu}>
                    Show Menu
                </button>

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
                                <li>Profile</li>
                                <li>Settings</li>
                                <li>Log Out</li>
                            </ul>
                        </div>
                    </div>
                )
                : (
                    null
                )
            </div>
        )
    }
}

export default NavbarDropdown;