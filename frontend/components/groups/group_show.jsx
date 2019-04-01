import React from 'react';
import { Link } from 'react-router-dom';

class GroupShow extends React.Component {
    componentDidMount() {
        this.props.fetchGroup(this.props.match.params.groupId);
    }

    // componentDidUpdate(prevProps) {
    //     debugger
    //     if (prevProps.group.id != this.props.match.params.groupId) {
    //         this.props.fetchGroup(this.props.match.params.groupId);
    //     }
    // }

    render() {
        const { group } = this.props;
        if (!group) {
            return <div>Loading...</div>;
        }

        return (
            <div className="group-show-wrapper">
                <div className="group-header-wrapper group-section-wrapper">
                    <div className="group-header-content group-content">
                        <div className="group-header group-picture group-side-left">
                            <img src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"></img>
                        </div>
                        <div className="group-header group-details group-side-right">
                            <h1>{group.name}</h1>
                            <h3>{group.hometown}</h3>
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
                        </div>
                    </div>
                </div>
                <div className="group-details-wrapper group-section-wrapper">
                    <div className="group-details-content group-content">
                        <div className="group-details-left group-side-left">
                            <div className="group-description">
                                <h3 className="group-section-label">What we're about</h3>
                                <p>{group.description}</p>
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
                            </div>
                            <div className="group-members">
                                <h3 className="group-section-label">Members</h3>
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