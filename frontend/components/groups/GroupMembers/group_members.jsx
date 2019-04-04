import React from "react";
import { Link } from "react-router-dom";

class GroupMembers extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.members) {
            return (
                <div className="members-container">
                    <ul className="members-ul">
                        {this.props.members.map(member => (
                            <li key={member.id} className="member-wrapper">
                                <h1>{member.username}</h1>
                            </li>
                        ))}
                    </ul>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default GroupMembers;