// import React from 'react';
// import { Link } from 'react-router-dom';

// const GroupMembers = (props) => {
//     debugger
//     const renderMember = (id) => {
//         debugger
//         return (
//             <li key={id}>{props.users[id].username}</li>
//         );
//     };

//     // const members = props.group.member_ids.map((id) => {
//     //     return (
//     //         renderMember(id)
//     //     );
//     // });

//     return (
//         <ul className="group-members-container ">
//             test
//             {/* {members} */}
//         </ul>
//     );
// }

// export default GroupMembers;


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