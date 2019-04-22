import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';


class ManageButton extends React.Component {
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
        if (!this.dropdownMenu.contains(event.target)) {
            this.setState({ showMenu: false }, () => {
                document.removeEventListener('click', this.closeMenu);
            });
        }
    }

    render() {
        let group = this.props.group;
        return (
            <div className="group-button-dropdown-complete">
                <button onClick={this.showMenu} className="group-button" id="leave">
                    <div className="group-button-content">
                        {/* Manage Group <i class="fal fa-chevron-down"></i> */}
                        Manage Group <img src="https://img.icons8.com/material-sharp/24/000000/chevron-down.png"/>
                    </div>
                </button>

                {
                    this.state.showMenu
                        ? (
                            <div
                                className="group-button-dropdown"
                                ref={(element) => {
                                    this.dropdownMenu = element;
                                }}>
                                <Link to={`${group.id}/manage`} className="group-button-dropdown-item" target="_blank">Edit Group Settings</Link>
                            </div>
                        )
                        : (
                            null
                        )
                }
            </div>
        )
    }
}


export default ManageButton;