import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const EventIndexItem = props => {
    return (

        <Link to={`/events/${props.event.id}`} className="event-index-item" style={{backgroundImage: `url(${props.event.photoUrl})`}}>
            <div className="event-index-item-content">
                <div className="event-index-start-date-block">
                    <h1 className="date-block-day">{moment(props.event.start_time).format('D')}</h1>
                    <h1 className="date-block-month">{moment(props.event.start_time).format('MMM')}</h1>
                </div>
                <div className="event-index-item-text">
                    <h3>{props.event.name}</h3>
                </div>
            </div>
        </Link> 
    )
}

export default EventIndexItem;