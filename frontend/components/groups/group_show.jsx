import React from 'react';
import { Link } from 'react-router-dom';
import GroupMembersContainer from './GroupMembers/group_members_container';
import GroupShowEventIndexContainer from '../events/group_event_index/group_show_event_index_container';
import { Route, Switch } from 'react-router';
import ManageButton from '../button_menus/manage_button';
import MemberButton from '../button_menus/member_button';

class GroupShow extends React.Component {

    constructor(props) {
        super(props);
        this.joinGroup = this.joinGroup.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            organizer: false,
            member: false,
            button: "join",
            organizer_name: "",
            photoFile: null,

        };
        
    }
    componentDidMount() {
        window.scrollTo(0, 0);
        let that = this;
        this.props.fetchGroup(this.props.match.params.groupId).then(() => {
            return that.setState({ memberships: that.props.group.memberships, organizer: that.props.group.organizers.includes(that.props.currentUser)});
        });
    }

    handleClick(e) {
        e.preventDefault();
        (this.joinGroup());
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('group[id]', this.props.group.id);
        formData.append('group[name]', this.props.group.name);
        formData.append('group[hometown]', this.props.group.hometown);
        formData.append('group[description]', this.props.group.description);
        formData.append('group[photo]', this.state.photoFile);
        
        return $.ajax({
            method: 'PATCH',
            url: `api/groups/${formData.get('group[id]')}`,
            data: formData,
            contentType: false,
            processData: false
            }).then(() => 
            this.setState({ photoFile: this.props.group.photo })
            ).then(location.reload());

    }

    handleFile(e) {
        this.setState({photoFile: e.currentTarget.files[0]});
    }

    joinGroup() {
        if (!this.props.currentUser) {
            this.props.history.push('/login');
        }
        const group = this.props.group;
        const currentGroupId = group.id;
        const userId = this.props.currentUser;
        return this.props.createMembership({user_id: userId, group_id: currentGroupId, organizer: false}).then(() => {
            this.setState({ member: true, button: "leave" });
        });
    }

    render() {
        if (!this.props.group || !this.props.group.organizers) {
            return <div className="loading-icon"><img src="https://loading.io/spinners/spinner/index.ajax-spinner-preloader.svg"></img></div>;
        }
        

        let members = this.props.group.members;
        let member_info = this.props.group.member_info;
        return (
            <div className="group-show-wrapper">
                <div className="group-header-wrapper group-section-wrapper">
                    <div className="group-header-content group-content">
                        <div className="group-header group-picture group-side-left" style={{ backgroundImage: `url(${this.props.group.photoUrl})`}}>
                            { this.state.organizer ? 
                                <>
                                    <form className="upload-group-photo-form" onSubmit={this.handleSubmit.bind(this)}>
                                        <label htmlFor="file" className="upload-group-photo">Change photo
                                            <input type="file" className="inputfile"
                                            onChange={this.handleFile.bind(this)}/>
                                        </label>
                                        {
                                            this.state.photoFile ?
                                                <>
                                                    <input className="group-form-submit" type="submit" value="Next" />
                                                </>
                                                : null
                                        }
                                    </form>
                                </>
                            : null
                            }

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
                                <h3>Organized by </h3>
                                    {(this.props.group.organizers && this.props.group.organizers.length < 1) ? <h2>No one right now! Apply to be an organizer!</h2>
                                    : <h2>{this.props.group.organizer_info[this.props.group.organizers[0]].username}</h2>
                                     }
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
                            this.props.group.members.includes(this.props.currentUser) && this.state.organizer &&
                                <ManageButton group={this.props.group} />
                        }

                        {
                            this.props.group.members.includes(this.props.currentUser) && !this.state.organizer &&
                                <MemberButton deleteMembership={this.props.deleteMembership} group={this.props.group} currentUser={this.props.currentUser} />
                        }

                        {
                            !this.props.group.members.includes(this.props.currentUser) &&
                                <button onClick={this.handleClick} className='group-button' id="join">Join Group</button>
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
                                <h3 className="group-section-label">Upcoming Events</h3>
                                {/* <h1>{this.props.events[10].name}</h1> */}
                                <GroupShowEventIndexContainer />
                            </div>
                            <div className="group-photos">
                                <h3 className="group-section-label">Photos</h3>
                            </div>
                        </div>
                        <div className="group-details-right group-side-right">
                            <div className="group-organizers">
                                <h3 className="group-section-label">Organizers</h3>
                                <div className="organizer-info">
                                    <img className="avatar" src="https://s3.amazonaws.com/gathr-dc-seeds/default-user.png"/>
                                    {(this.props.group.organizers && this.props.group.organizers.length < 1) ? <h2>No one right now! Apply to be an organizer!</h2>
                                        : <h2>{this.props.group.organizer_info[this.props.group.organizers[0]].username}</h2>
                                    }
                                </div>
                            </div>
                            
                            <div className="group-members">
                                <h3 className="group-section-label">Members&nbsp;({this.props.group.member_count})</h3>
                                 <GroupMembersContainer memberIDs={members} member_info={member_info}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GroupShow;

