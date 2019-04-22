import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';


class CreateEventButton extends React.Component {
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
            <div className="create-event-button-dropdown-complete">
                <button onClick={this.showMenu} className="create-event-button" id="createEvent">
                    <div className="create-event-button-content">
                        Create Event <img src="https://img.icons8.com/material-sharp/24/000000/chevron-down.png" />
                    </div>
                </button>

                {
                    this.state.showMenu
                        ? (
                            <div
                                className="create-event-button-dropdown"
                                ref={(element) => {
                                    this.dropdownMenu = element;
                                }}>
                                <Link to={`/groups/${group.id}/events/schedule`} className="create-event-button-dropdown-item">Create a new event</Link>
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


export default CreateEventButton;