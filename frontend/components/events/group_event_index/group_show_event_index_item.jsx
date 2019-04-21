import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const GroupShowEventIndexItem = props => {
    return (

        <Link to={`/events/${props.event.id}`} className="group-event-index-item">
            <div className="group-event-index-item-content">
                <div className="group-event-index-item-header">
                    <div className="group-event-index-item-header-left">
                        <p className="group-event-index-item-header-start">{moment(props.event.start_time).format('ddd, MMM, D, h:mm A')}</p>
                        <p className="group-event-index-item-header-name">{props.event.name}</p>
                    </div>
                    <div className="group-event-index-item-header-right">
                        <img className="group-event-index-item-photo" src={props.event.photoUrl}></img>
                    </div>
                </div>
                <div className="group-event-index-item-description">
                    <p>{props.event.description}</p>
                </div>
                <div className="group-event-index-item-actions">
                    <button className="attend-button">Attend</button>
                </div>
            </div>
        </Link>
    )
}

export default GroupShowEventIndexItem;