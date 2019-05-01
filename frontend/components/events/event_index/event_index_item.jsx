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
        // <Link to={`/events/${props.event.id}`} className="event-index-list-item">
        //     <div className="event-index-list-item-content">
        //         <div className="event-index-list-start-time">
        //             <p className="date-list-time">{moment(props.event.start_time).format('h:mm A')}</p>
        //             {/* <h1 className="date-list-ampm">{moment(props.event.start_time).format('mm')}</h1> */}
        //         </div>
        //         <div className="event-index-list-item-text">
        //             <h4>{props.event.group_name}</h4>
        //             <h3>{props.event.name}</h3>
        //             <h5>{props.event.attendee_count} people going</h5>
        //         </div>
        //     </div>
        // </Link> 
    )
}

export default EventIndexItem;