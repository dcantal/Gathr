import React from 'react';
import { Link } from 'react-router-dom';

const GroupIndexItem = props => {
    return (
        <div className="group-index-item">
            <Link to={`/groups/${props.group.id}`}>{props.group.name</Link>
        </div>
    )
}

export default GroupIindexItem;