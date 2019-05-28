import React from 'react';
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import EventAttendeesContainer from '../event_attendees/event_attendees_container';
import moment from 'moment';

class EventShow extends React.Component {

    constructor(props) {
        super(props);
        this.handleClickJoin = this.handleClickJoin.bind(this);
        this.handleClickCancel = this.handleClickCancel.bind(this);
        this.joinEvent = this.joinEvent.bind(this);
        this.cancelRsvp = this.cancelRsvp.bind(this);
        this.state = {
            attending: false,
            organizer: false,
            organizer_name: "",
        };
        this.joinEvent = this.joinEvent.bind(this);
        this.cancelRsvp = this.cancelRsvp.bind(this);

    }
    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.fetchEvent(this.props.match.params.eventId).then(() => {
            return this.setState({ attending: this.props.event.attendees.includes(this.props.currentUser), rsvps: this.props.event.attendees, organizer: this.props.event.organizers.includes(this.props.currentUser), attendees: this.props.event.attendees, attendee_info: this.props.event.attendee_info });
        });
    }

    handleClickJoin(e) {
        e.preventDefault();
        this.joinEvent();
    }

    handleClickCancel(e) {
        e.preventDefault();
        this.cancelRsvp();
    }

    joinEvent() {
        if (!this.props.currentUser) {
            this.props.history.push('/login');
        }
        const event = this.props.event;
        const currentEventId = event.id;
        const userId = this.props.currentUser;
        if (!this.state.attending) {
            return this.props.createRsvp({ user_id: userId, event_id: currentEventId, organizer: false }).then(() => {
                this.setState({ attending: true, button: "cancel" });
            });
        }

    }

    cancelRsvp() {
        if (this.state.attending) {

            this.props.deleteRsvp(this.props.event.rsvps[this.props.currentUser]).then(() => {
                this.props.fetchEvent(this.props.match.params.eventId).then(() => {
                    this.setState({ attending: false, button: "join" });
                });
            });
        }
    }



    render() {
        if (!this.props || !this.props.event || !this.props.event.group) {
            return <div className="loading-icon"><img src="https://loading.io/spinners/spinner/index.ajax-spinner-preloader.svg"></img></div>;
        }
        return (
            <div className="event-show-wrapper">
                <div className="event-show-head-wrapper">
                    <div className="event-show-head-start-date-block">
                        <h1 className="date-block-day">{moment(this.props.event.start_time).format('D')}</h1>
                        <h1 className="date-block-month">{moment(this.props.event.start_time).format('MMM')}</h1>
                    </div>
                    <div className="event-show-head-content">
                        <div className="event-show-head-left">
                            <h1 className="event-show-head-start-date">
                                {
                                    moment(this.props.event.start_time).format('dddd, LL')
                                }

                            </h1>
                            <h1 className="event-show-head-title">{this.props.event.name}</h1>
                            <div className="event-show-head-hosted">
                                <img className="avatar-event" src="https://s3.amazonaws.com/gathr-dc-seeds/default-user.png" />
                                <div className="event-show-head-host-info">
                                    <h1 className="event-show-head-hosted-by">Hosted by</h1>
                                    <h1 className="event-show-head-host-name">
                                        {
                                            (!this.props.event.organizers || this.props.event.organizers.length < 1) ? "No one!" : this.props.event.organizer_info[this.props.event.organizers[0]].username
                                        }
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className="event-show-head-right">
                            <div className="event-show-head-rsvp">
                                <div className="event-show-rsvp-status">
                                    <h1 className="rsvp-status">
                                        { (this.state.attending) ? ("You're going!") : ("Are you going?") }
                                    </h1> &nbsp; &nbsp;
                                    <h1 className="event-attendee-numbers">
                                        {this.props.event.attendee_count} 
                                        { this.props.event.attendee_count ===1 ? " person is going" : " people are going"}
                                    </h1>
                                </div>
                                <div className="event-show-rsvp-buttons">
                                    <button onClick={this.handleClickJoin} className={this.state.attending ? "rsvp-button" : "rsvp-button-off"}><i className="fas fa-check"></i></button>
                                    <button onClick={this.handleClickCancel} className={this.state.attending ? "rsvp-button-off" : "rsvp-button"}><i className="fas fa-times"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="event-show-content-wrapper">
                    <div className="event-show-content">
                        <div className="event-show-content-left-wrapper">
                            <div className="event-show-content-left">
                                <div className="event-picture" style={{ backgroundImage: `url(${this.props.event.photoUrl})` }}>

                                </div>
                                <div className="event-details">
                                    <h1 className="event-show-label">Details</h1>
                                    <p className="event-show-details">{this.props.event.description}</p>
                                </div>
                                <div className="event-attendees">
                                    <h1 className="event-show-label">Attendees&nbsp;({this.props.event.attendee_count})</h1>
                                    <EventAttendeesContainer attendees={this.props.event.attendees} attendee_info={this.props.event.attendee_info}/>
                                </div>
                            </div>
                        </div>
                        <div className="event-show-content-right-wrapper">
                            <div className="event-show-content-right">
                                <div className="event-card event-group-info">
                                    <Link to={`/groups/${this.props.event.group_id}/`} className="event-group-link">
                                        <div className="event-group-picture" style={{ backgroundImage: `url(${this.props.event.group.photoUrl})` }}></div>
                                        <h1 className="event-group-name">{this.props.event.group.name}</h1>
                                    </Link>
                                </div>
                                <div className="event-card event-date-address-map">
                                    <div className="event-date-address">
                                        <div className="event-date">
                                            <img className="event-date-clock-icon" src="https://img.icons8.com/ios/50/000000/watch.png"/>
                                            <div className="event-side-dates">
                                                <h1 className="event-show-side-date event-show-side-start-date">
                                                    {
                                                        moment(this.props.event.start_time).format('dddd, LL, h:mm A')
                                                    } to
                                                </h1>
                                                <h1 className="event-show-side-date vent-show-side-start-date">
                                                    {
                                                        moment(this.props.event.end_time).format('dddd, LL, h:mm A')
                                                    }
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="event-location">
                                        <div className="event-address">
                                            <a href={`https://www.google.com/maps/search/?api=1&query=${this.props.event.latitude},${this.props.event.longitude}`} target="_blank">
                                                <img className="event-map" src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.props.event.latitude},${this.props.event.longitude}&zoom=17&size=480x300&
                                                    &maptype=roadmap&markers=color:red%7C${this.props.event.latitude},${this.props.event.longitude}&key=AIzaSyBReG7fbGJa7BQ_j887_om_hWgaX2XEP_c`}>
                                                </img> 
                                            </a>
                                        </div>
                                    </div>
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

