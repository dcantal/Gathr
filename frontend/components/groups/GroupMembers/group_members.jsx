import React from "react";
import GroupMemberItem from './group_member_item';
import { Link } from "react-router-dom";

class GroupMembers extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        if (!this.props.memberIDs) {
            return null;
        }
        let members = this.props.memberIDs.map((member) => {
            return (
                <GroupMemberItem key={member} member={this.props.member_info[member]} />
            );
        });
        return (
            <div className="member-list">
                <div className="member-grid">
                    {members}
                </div>
            </div>
        )
    }
}

export default GroupMembers;