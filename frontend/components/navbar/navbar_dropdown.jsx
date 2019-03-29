import React from 'react';
import { Link } from 'react-router-dom';
// import meetupvideo from '../../../app/assets/videos/meetupbanner.mp4';

class NavbarDropdown extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
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
    }
}

export default NavbarDropdown;