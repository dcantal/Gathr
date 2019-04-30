import React from 'react';
import EventIndexItem from './event_index_item';

class EventIndex extends React.Component {

    componentDidMount() {
        this.props.fetchEvents();
    }

    render() {
        let events;
        if (!this.props.matches) {
            return <div className="loading-icon"><img src="https://loading.io/spinners/spinner/index.ajax-spinner-preloader.svg"></img></div>;
        }
        if (this.props.matches.length > 0 && this.props.matches[0] !== -1) {
            events = this.props.events.map((event) => {
                if (this.props.matches.includes(event.id)) {
                    return (
                        <EventIndexItem key={event.id} event={event} />
                    );
                }
            });
        }
        else if (this.props.matches.length === 0){
            events = this.props.events.map((event) => {
                    return (
                        <EventIndexItem key={event.id} event={event} />
                    );
            });
        }
        else {
            return (
                <div className="event-list">
                    <h1>NO EVENTS FOUND</h1>
                </div>
            );
        }

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