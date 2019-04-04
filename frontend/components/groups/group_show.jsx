import React from 'react';
import { Link } from 'react-router-dom';
import GroupMembersContainer from './GroupMembers/group_members_container';
import { Route, Switch } from 'react-router';

class GroupShow extends React.Component {

    constructor(props) {
        super(props);
        this.joinGroup = this.joinGroup.bind(this);
        this.leaveGroup = this.leaveGroup.bind(this);
        // this.state = {
        //     showMenu: false,
        // };
        
    }
    componentDidMount() {
        debugger
        this.props.fetchGroup(this.props.match.params.groupId);
        // this.props.fetchMembers(this.props.match.params.groupId);
        debugger
    }

    // componentDidUpdate(prevProps) {
    //     debugger
    //     if (prevProps.group.id != this.props.match.params.groupId) {
    //         this.props.fetchGroup(this.props.match.params.groupId);
    //     }
    // }

    joinGroup() {
        const group = this.props.group;
        const currentGroupId = group.id;
        const userId = this.props.currentUser;
        this.props.createMembership({user_id: userId, group_id: currentGroupId, organizer: false});
    }

    leaveGroup() {
        debugger
        this.props.deleteMembership(this.props.group.memberships[this.props.currentUser]);
        // location.reload();
    }

    render() {
        debugger
        const allProps = {group: this.props.group, users: this.props.members};
        if (!this.props.group) {
            return <div className="loading-icon"><img src="https://loading.io/spinners/spinner/index.ajax-spinner-preloader.svg"></img></div>;
            // return <div className="loading-icon">Loading...</div>;
        }

        const joinButton = () => (
            <button onClick={this.joinGroup} className="group-button join-group-button">Join this group</button>
        );

        const manageButton = () => (
            <button className="group-button manage-button">Manage group</button>
        );

        const alreadyMemberButton = () => (
            <button onClick={this.leaveGroup} className="group-button manage-button">You're a member</button>
        );
        debugger
        return (
            <div className="group-show-wrapper">
                <div className="group-header-wrapper group-section-wrapper">
                    <div className="group-header-content group-content">
                        <div className="group-header group-picture group-side-left">
                            <img src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"></img>
                        </div>
                        <div className="group-header group-details group-side-right">
                            <h1 className="group-name">{this.props.group.name}</h1>
                            <div className="group-header-line">
                                <i className="fas fa-map-marker-alt"></i>
                                <h3>{this.props.group.hometown}</h3>
                            </div>
                            {
                                this.props.group.member_count === 1 
                                    ? (
                                        <div className="group-header-line">
                                            <i className="fas fa-user-friends"></i>
                                            <h3>{this.props.group.member_count} member</h3>
                                        </div>
                                    )
                                    : (
                                        <div className="group-header-line">
                                            <i className="fas fa-user-friends"></i>
                                            <h3>{this.props.group.member_count} members</h3>
                                        </div>
                                    )               
                            }

                            <div className="group-header-line">
                                <i className="fas fa-user"></i>
                                {/* <h3>Organized by {this.props.group.member_info[10].username}</h3> */}
                                <h3>Organized by </h3>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="group-actions-wrapper group-section-wrapper">
                    <div className="group-actions-content group-content">
                        <div className="group-actions-left">
                            <li>About</li>
                            <li>Events</li>
                            <li>Members</li>
                            <li>Photos</li>
                            <li>Discussions</li>
                            <li>More</li>
                        </div>
                        <div className="group-actions-right">
                            {
                            (this.props.group.members.includes(this.props.currentUser))
                            ? (
                                alreadyMemberButton()
                                // <h1>You are in this group</h1>
                            )
                            : (
                                joinButton()
                                // <h1>You are not in this group</h1>
                            )
                            }
                        </div>
                    </div>
                </div>
                <div className="group-details-wrapper group-section-wrapper">
                    <div className="group-details-content group-content">
                        <div className="group-details-left group-side-left">
                            <div className="group-description">
                                <h3 className="group-section-label">What we're about</h3>
                                <p>{this.props.group.description}</p>
                            </div>
                            <div className="group-upcoming-events">
                                <h3 className="group-section-label">Events</h3>
                            </div>
                            <div className="group-photos">
                                <h3 className="group-section-label">Photos</h3>
                            </div>
                        </div>
                        <div className="group-details-right group-side-right">
                            <div className="group-organizers">
                                <h3 className="group-section-label">Organizers</h3>
                                {/* <span className="avatar">adsfadgasd</span> */}
                                <span className="avatar"><i className="far fa-user"></i></span>
                            </div>
                            <div className="group-members">
                                <h3 className="group-section-label">Members&nbsp;({this.props.group.member_count})</h3>
                                <ul>
                                    {/* <li>{this.props.group.member_info[this.props.group.members[0]].username}</li>
                                    <li>{this.props.group.member_info[this.props.group.members[1]].username}</li> */}
                                </ul>
                                {/* <GroupMembers {...allProps}/> */}
                            </div>
                        </div>
                    </div>
                </div>
                <Link to="/">Back to Index</Link>
            </div>
        );
    }
}

export default GroupShow;

// import React from 'react';
// import { Link } from 'react-router-dom';

// import GroupDetail from './group_detail';


// const GroupShow = ({ group, groupId }) => {
//     const groups = {
//         [groupId]: group
//     };
//     debugger
//     return (
//         <div className="single-group-show">
//             <GroupDetail group={group} />
//         </div>
//     );
// };

// export default GroupShow;