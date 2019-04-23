import React from 'react';
import { Link } from 'react-router-dom';

const EventAttendeeItem = props => {
    return (

        <div className="event-attendee-card">
            <img className="avatar attendee-avatar" src="https://s3.amazonaws.com/gathr-dc-seeds/default-user.png" />
            <h1 className="event-attendee-card-name">{props.attendee.username}</h1>
        </div>
    )
}

export default EventAttendeeItem;