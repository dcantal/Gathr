import React from 'react';
import EventIndexItem from './event_index_item';
import DayPicker from 'react-day-picker';
import * as moment from 'moment';

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
        this.setState({ selectedDay: day });
    }

    render() {
        let days;
        if (!this.props.matches) {
            return <div className="loading-icon"><img src="https://loading.io/spinners/spinner/index.ajax-spinner-preloader.svg"></img></div>;
        }
        if (this.props.matches.length > 0 && this.props.matches[0] !== -1) {
            days = this.props.event_days.map((day) => {
                // if (this.props.matches.includes(event.id) && event.start_time > this.state.selectedDay) {
                let events = [];
                this.props.events.forEach((event) => {
                    if (moment(event.start_time).format('dddd, MMMM D') == day) {
                        events.push(event);
                    } 
                })
                return (
                    <EventIndexItem key={day} day={day} events={events} />
                );
            })
            // events = this.props.events.map((event) => {
            //     if (this.props.matches.includes(event.id) && event.start_time > this.state.selectedDay) {
            //         return (
            //             <EventIndexItem key={event.id} event={event} />
            //         );
            //     }
            // });
        }
        else if (this.props.matches.length === 0){
            days = this.props.event_days.map((day) => {
                let events = [];
                this.props.events.forEach((event) => {
                    if (moment(event.start_time).format('dddd, MMMM D') == day) {
                        events.push(event);
                    } 
                })
                return (
                    <EventIndexItem key={day} day={day} events={events} />
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
            <div className="find-event-wrapper">
                <div className="find-event-content">
                    <div className="find-event-left">
                        {days}
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