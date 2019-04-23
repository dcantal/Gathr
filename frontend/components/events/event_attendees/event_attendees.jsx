import React from "react";
import EventAttendeeItem from './event_attendee_item';
import { Link } from "react-router-dom";

class EventAttendees extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        if (!this.props.attendees) {
            return null;
        }
        let attendees = this.props.attendees.map((attendee) => {
            return (
                <EventAttendeeItem key={attendee} attendee={this.props.attendee_info[attendee]} />
            );
        });
        return (
            <div className="attendee-list">
                <div className="attendee-grid">
                    {attendees}
                </div>
            </div>
        )
    }
}

export default EventAttendees;