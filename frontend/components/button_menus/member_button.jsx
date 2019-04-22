import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';


class MemberButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false,
            member: true,
        };

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.leaveGroup = this.leaveGroup.bind(this);
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

    handleClick(e) {
        e.preventDefault();
        this.leaveGroup();
    }

    leaveGroup() {
        // let that = this;
        // return this.props.deleteMembership(this.props.group.memberships[this.props.currentUser]).then(() => {
        //     //would like this to not reload but instead show the new button
        //     location.reload();
        // });
        this.setState({showMenu: false});
        document.removeEventListener('click', this.closeMenu);
        return this.props.deleteMembership(this.props.group.memberships[this.props.currentUser]);

    }

    render() {
        let group = this.props.group;
        return (
            <div className="group-button-dropdown-complete">
                <button onClick={this.showMenu} className="group-button" id="leave">
                    <div className="group-button-content">
                        {/* You're a member <i class="fal fa-chevron-down"></i> */}
                        You're a member
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
                                <button onClick={this.handleClick} className='group-button-dropdown-item' id={this.state.button}>Leave this group</button>
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


export default MemberButton;