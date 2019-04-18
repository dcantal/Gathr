import React from 'react';
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router';

class EventShow extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
        };

    }
    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.fetchEvent(this.props.match.params.eventId);
    }

    handleClick(e) {
        e.preventDefault();
    }



    render() {
        if (!this.props.event) {
            return <div className="loading-icon"><img src="https://loading.io/spinners/spinner/index.ajax-spinner-preloader.svg"></img></div>;
        }
        debugger

        return (
            <div className="event-show-wrapper">
                <div className="event-show-head-wrapper">
                    <div className="event-show-head-content">
                        <div className="event-show-head-left">
                            <h1>{this.props.event.start_time}</h1>
                            <h1>{this.props.event.name}</h1>
                            <h1>Hosted by asd;flkjasdf;l</h1>
                        </div>
                        <div className="event-show-head-right">
                            <div className="event-show-head-social">
                                <p>Share:</p>
                                <p>FB</p>
                                <p>Twitter</p>
                                <p>LinkedIn</p>
                                <p>Share</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="event-show-content-wrapper">
                    <div className="event-show-content">
                        <div className="event-show-content-left">

                        </div>
                        <div className="event-show-content-right">
                            <div className="event-organizer">
                                <h1>Organizer Tools</h1>
                            </div>
                            <div className="event-date-address-map">
                                <div className="event-dates">
                                    <h1>{this.props.event.start_time}</h1>
                                    <h1>{this.props.event.end_time}</h1>
                                </div>
                                <div className="event-address">
                                    <h1>{this.props.event.latitude}</h1>
                                    <h1>{this.props.event.longitude}</h1>
                                </div>
                                <div className="event-map">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EventShow;

