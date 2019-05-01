import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const EventIndexItemEvent = props => {
  return (
    // <Link to={`/events/${props.event.id}`} className="event-index-list-item">
    //   <div className="event-index-list-item-content">
    //     <div className="event-index-list-start-time">
    //       <p className="date-list-time">
    //         {moment(props.event.start_time).format("h:mm A")}
    //       </p>
    //       {/* <h1 className="date-list-ampm">{moment(props.event.start_time).format('mm')}</h1> */}
    //     </div>
    //     <div className="event-index-list-item-text">
    //       <h4>{props.event.group_name}</h4>
    //       <Link to={`/events/${props.event.id}`}>
    //         <h3>{props.event.name}</h3>
    //       </Link>
    //       <h5>{props.event.attendee_count} people going</h5>
    //     </div>
    //   </div>
    // </Link>
      <div className="event-index-list-item-content">
        <div className="event-index-list-start-time">
          <p className="date-list-time">
            {moment(props.event.start_time).format("h:mm A")}
          </p>
          {/* <h1 className="date-list-ampm">{moment(props.event.start_time).format('mm')}</h1> */}
        </div>
        <div className="event-index-list-item-text">
            <Link to={`/groups/${props.event.group_id}`} className="event-index-list-item-group-name">
                <h4>{props.event.group_name}</h4>
            </Link>
            <Link to={`/events/${props.event.id}`} className="event-index-list-item-event-name">
            <h3>{props.event.name}</h3>
            </Link>
            <h5>{props.event.attendee_count} people going</h5>
        </div>
      </div>
  );
};

export default EventIndexItemEvent;
