import React from 'react';
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import moment from 'moment';

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
                                    <h1 className="event-show-head-host-name">Dante C.</h1>
                                </div>
                            </div>
                        </div>
                        <div className="event-show-head-right">
                            <div className="event-show-head-rsvp">
                                <div className="event-show-rsvp-status">
                                    <h1 className="rsvp-status">Are you going?</h1> &nbsp; &nbsp;
                                    <h1 className="event-attendee-numbers">2 people are going</h1>
                                </div>
                                <div className="event-show-rsvp-buttons">
                                    <button className="rsvp-button">Y</button>
                                    <button className="rsvp-button">N</button>
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
                                    {/* {this.state.organizer ?
                                        <>
                                            <form className="upload-group-photo-form" onSubmit={this.handleSubmit.bind(this)}>
                                                <label htmlFor="file" className="upload-group-photo">Change photo
                                                <input type="file" className="inputfile"
                                                        onChange={this.handleFile.bind(this)} />
                                                </label>
                                                {
                                                    this.state.photoFile ?
                                                        <>
                                                            <input className="group-form-submit" type="submit" value="Next" />
                                                        </>
                                                        : null
                                                }
                                            </form>
                                        </>
                                        : null
                                    } */}

                                </div>
                                <div className="event-details">
                                    <h1 className="event-show-label">Details</h1>
                                    <p className="event-show-details">{this.props.event.description}</p>
                                </div>
                            </div>
                        </div>
                        <div className="event-show-content-right-wrapper">
                            <div className="event-show-content-right">
                                {/* <div className="event-card event-organizer">
                                    <h1>Organizer Tools</h1>
                                </div> */}
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
                                                    }
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

