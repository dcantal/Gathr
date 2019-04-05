import React from 'react';
import { Link } from 'react-router-dom';

const GroupMemberItem = props => {
    return (
        // <Link to={`/groups/${props.group.id}`} className="group-index-item" style={{ backgroundImage: `url(${props.group.photoUrl})` }}>
        //     <div className="group-index-item-content">
        //         <div className="group-index-item-text">
        //             {
        //                 (props.group.member_count === 1) ? (

        //                     <p>{props.group.member_count} member</p>
        //                 ) : (

        //                         <p>{props.group.member_count} members</p>
        //                     )
        //             }
        //             <h3>{props.group.name}</h3>
        //         </div>
        //         {/* <h1>TestIndexItem</h1> */}
        //     </div>
        // </Link>
        <>
            <img className="avatar" src="https://s3.amazonaws.com/gathr-dc-seeds/default-user.png" />
            {/* <h1>{props.member.username}</h1> */}
        </>
    )
}

export default GroupMemberItem;