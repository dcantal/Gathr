import React from 'react';
import { Link } from 'react-router-dom';

const GroupIndexItem = props => {
    return (

        <Link to={`/groups/${props.group.id}`} className="group-index-item" style={{backgroundImage: `url(${props.group.photoUrl})`}}>
            <div className="group-index-item-content">
                <div className="group-index-item-text">
                    {
                        (props.group.member_count === 1) ? (

                            <p>{props.group.member_count} member</p>
                        ) : (
                            
                            <p>{props.group.member_count} members</p>
                        )
                    } 
                    <h3>{props.group.name}</h3>
                </div>
            </div>
        </Link>
    )
}

export default GroupIndexItem;