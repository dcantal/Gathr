import React from 'react';
import EventIndexItem from './event_index_item';

class EventIndex extends React.Component {

    componentDidMount() {
        this.props.fetchEvents();
    }

    render() {
        let events = this.props.events.map((event) => {
            // if (this.props.currentUserGroups.includes(event.group_id)) {
                return (
                    <EventIndexItem key={event.id} event={event} /> 
                );
            // }
        });
        return (
            <div className="event-list">
                <h1>EVENTS IN YOUR GROUPS</h1>
                <div className="event-grid">
                    {events}
                </div>
            </div>
        );
    }
}


export default EventIndex;