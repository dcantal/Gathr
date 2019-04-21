import React from 'react';
import { Link } from 'react-router-dom';

const EventIndexItem = props => {
    return (

        <Link to={`/events/${props.event.id}`} className="event-index-item" style={{backgroundImage: `url(${props.event.photoUrl})`}}>
            <div className="event-index-item-content">
                <div className="event-index-item-text">
                    <h3>{props.event.name}</h3>
                </div>
            </div>
        </Link> 
    )
}

export default EventIndexItem;