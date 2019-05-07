import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import GroupShowEventIndexContainer from '../events/group_event_index/group_show_event_index_container';


class CreateEventButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false,
            showModal: false,
        };

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.showModal = this.showModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
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
        // if (!this.dropdownMenu.contains(event.target)) {
            this.setState({ showMenu: false }, () => {
                document.removeEventListener('click', this.closeMenu);
            });
        // }
    }

    showModal(event) {
        event.preventDefault();

        this.setState({
            showModal: true,
        }, () => {
            document.addEventListener('click', this.closeModal);
        });
    }

    closeModal() {
        // if (!this.dropdownMenu.contains(event.target)) {
            this.setState({ showModal: false }, () => {
                document.removeEventListener('click', this.closeModal);
            });
        // }
    }

    render() {
        let group = this.props.group;
        return (
            <div className="create-event-button-dropdown-complete">
                <button onClick={this.showMenu} className="create-event-button" id="createEvent">
                    <div className="create-event-button-content">
                        Create Event
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
                                <button onClick={this.showModal} className="create-event-button-dropdown-item">Edit an event</button>
                            </div>
                        )
                        : (
                            null
                        )
                }

                {
                    this.state.showModal
                        ? (
                            <div className="event-modal">
                                <div className="event-modal-content">
                                    <h1>Select an event to edit</h1>
                                    <GroupShowEventIndexContainer events={this.props.events} state="edit" />
                                </div>
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