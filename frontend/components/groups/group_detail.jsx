import React from 'react';
import { Link } from 'react-router';

const GroupDetail = ({ group }) => {
    return (
        <div>
            <h1>Name: {group.name}</h1>
            <h1>Description: {group.description}</h1>
            <h1>Hometown: {group.hometown}</h1>
        </div>
    );
};

export default GroupDetail;