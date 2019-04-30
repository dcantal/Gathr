import React from 'react';
import EventIndexItem from './event_index_item';
import DayPicker from 'react-day-picker';

class EventIndex extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedDay: null,
        };
        this.handleDayClick = this.handleDayClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchEvents();
    }

    handleDayClick(day) {
        debugger
        this.setState({ selectedDay: day });
        debugger
    }

    render() {
        debugger
        let events;
        if (!this.props.matches) {
            return <div className="loading-icon"><img src="https://loading.io/spinners/spinner/index.ajax-spinner-preloader.svg"></img></div>;
        }
        if (this.props.matches.length > 0 && this.props.matches[0] !== -1) {
            events = this.props.events.map((event) => {
                if (this.props.matches.includes(event.id) && event.start_time > this.state.selectedDay) {
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
            // <div className="event-list">
            //     <h1>EVENTS IN YOUR GROUPS</h1>
            //     <div className="event-grid">
            //         {events}
            //     </div>
            // </div>
            <div className="find-event-wrapper">
                <div className="find-event-content">
                    <div className="find-event-left">
                        {events}
                    </div>
                    <div className="find-event-right">
                        <div className="find-event-mode">
                            All upcoming events
                        </div>
                        <div className="find-event-calendar">
                            <DayPicker onDayClick={this.handleDayClick} selectedDays={this.state.selectedDay}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default EventIndex;