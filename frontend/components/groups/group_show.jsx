import React from 'react';
import { Link } from 'react-router-dom';

import GroupDetail from './group_detail';


const GroupShow = ({ group, groupId }) => {
    const groups = {
        [groupId]: group
    };

    return (
        <div className="single-group-show">
            <GroupDetail group={group} />
        </div>
    )
}

export default GroupShow;