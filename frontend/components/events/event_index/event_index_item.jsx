import React from 'react';
import EventIndexItemEvent from './event_index_item_event';
import { Link } from 'react-router-dom';
import moment from 'moment';

const EventIndexItem = props => {
    let events = props.events.map((event) => {
        return (<EventIndexItemEvent key={event.id} event={event}/>);
    });

    return (
        <div className="event-index-list-item-day-content">
            <div className="event-index-list-day-start-day">
                <h1>{props.day}</h1>
            </div>
            <div className="event-index-list-item-events">
                {events}
            </div>
        </div>
    )
}

export default EventIndexItem;