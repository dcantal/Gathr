import React from 'react';
import { Link } from 'react-router-dom';

const GroupMemberItem = props => {
    return (

        <>
            <img className="avatar" id="group-show-avatar"src="https://s3.amazonaws.com/gathr-dc-seeds/default-user.png" />
            {/* <h1>{props.member.username}</h1> */}
        </>
    )
}

export default GroupMemberItem;