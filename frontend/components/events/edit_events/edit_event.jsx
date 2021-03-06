
import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { withRouter } from 'react-router-dom';
import Script from 'react-load-script';
import moment from 'moment';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import MomentLocaleUtils, {
    formatDate,
    parseDate,
} from 'react-day-picker/moment';

class EditEvent extends React.Component {
    constructor(props) {
        super(props);
        let event = this.props.event;
        this.handleStartDayClick = this.handleStartDayClick.bind(this);
        this.handleEndDayClick = this.handleEndDayClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showStartDate = this.showStartDate.bind(this);
        this.closeStartDate = this.closeStartDate.bind(this);
        this.showEndDate = this.showEndDate.bind(this);
        this.closeEndDate = this.closeEndDate.bind(this);
        this.state = {
            event: event,
            selectedStartDay: this.props.selectedStartDay,
            selectedStartTime: this.props.selectedStartTime,
            selectedEndDay: this.props.selectedEndDay,
            selectedEndTime: this.props.selectedEndTime,
            showStartDate: false,
            showEndDate: false,
            photoFile: null,
        };
        this.handleScriptLoad = this.handleScriptLoad.bind(this);
        this.handlePlaceSelect = this.handlePlaceSelect.bind(this);

    }

    componentDidMount() {
        let that = this;
        this.props.fetchEvent(this.props.match.params.eventId).then(() => {
            this.setState({ name: that.state.event.name,
            description: that.state.event.description,
            address: that.state.event.address,
            start_time: that.state.event.start_time,
            end_time: that.state.event.end_time,
            latitude: that.state.event.latitude,
            longitude: that.state.event.longitude,
            photoUrl: that.state.event.photoUrl,
            private: that.state.event.private,
             });
        });
    }

    handleFile(e) {
        this.setState({ photoFile: e.currentTarget.files[0] });
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }

    showStartDate(event) {
        event.preventDefault();
        this.setState({
            showStartDate: true,
        }, () => {
            document.addEventListener('click', this.closeStartDate);
        });
    }

    closeStartDate() {
        if (!this.startDateMenu.contains(event.target)) {
            this.setState({ showStartDate: false }, () => {
                document.removeEventListener('click', this.closeStartDate);
            });
        }
    }

    showEndDate(event) {
        event.preventDefault();
        this.setState({
            showEndDate: true,
        }, () => {
            document.addEventListener('click', this.closeEndDate);
        });
    }

    closeEndDate() {
        if (!this.endDateMenu.contains(event.target)) {
            this.setState({ showEndDate: false }, () => {
                document.removeEventListener('click', this.closeEndDate);
            });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        let start_date = moment(this.state.selectedStartDay).format("MM-DD-YYYY");
        let start_datetime = moment(this.state.start_time).format("MM-DD-YYYY hh:mm A");
        let end_date = moment(this.state.selectedEndDay).format("MM-DD-YYYY");
        let end_datetime = moment(this.state.end_time).format("MM-DD-YYYY hh:mm A");
        this.props.updateEvent({id: this.props.event.id, 
            group_id: this.props.event.group_id,
            name: this.state.name,
            description: this.state.description,
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            address: this.state.address,
            start_time: start_datetime,
            end_time: end_datetime });
    }

    handleStartDayClick(day) {
        this.setState({ selectedStartDay: day });
    }

    handleEndDayClick(day) {
        this.setState({ selectedEndDay: day });
    }

    handleScriptLoad() {
        const options = { types: ['geocode', 'establishment'] };
        this.autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'), options);
        this.autocomplete.addListener('place_changed', this.handlePlaceSelect);
    }

    handlePlaceSelect() {
        let addressObject = this.autocomplete.getPlace();
        let address = addressObject.geometry.location;
        let lat = address.lat();
        let lng = address.lng();
        let addr = addressObject.formatted_address;
        if (address) {
            this.setState({
                address: addr,
                latitude: lat,
                longitude: lng,
            });
        }
    }


    render() {
        if (!this.props.event) {
            return <div className="loading-icon"><img src="https://loading.io/spinners/spinner/index.ajax-spinner-preloader.svg"></img></div>;
        }

        return (
            <>
                <Script url="https://maps.googleapis.com/maps/api/js?key=AIzaSyBReG7fbGJa7BQ_j887_om_hWgaX2XEP_c&libraries=places" onLoad={this.handleScriptLoad} />
                <div className="full-event-page">
                    <div className="event-form">
                        <div className="event-form-left">
                            <div className="event-form-header">
                                <h1>Edit an event</h1>
                                <h2>{this.props.event.name}</h2>
                            </div>
                            <div className="event-form-wrapper">
                                <form onSubmit={this.handleSubmit} className="create-event-form">
                                    <label className="event-step-container">
                                        <div className="event-step-details">
                                            <p className="event-step-label">Title</p>
                                            <input
                                                type="text"
                                                value={this.state.name}
                                                onChange={this.update('name')}
                                                className="event-form-input"
                                            />
                                        </div>
                                    </label>


                                    <label className="event-step-container">
                                        <div className="event-step-details">
                                            <p className="event-step-label">Start</p>
                                            <div className="event-date-time">
                                                <input
                                                    type="text"
                                                    value={(this.state.start_time) ? new Date(this.state.start_time).toLocaleDateString('en-US') : "Select a start date"}
                                                    onChange={this.update('selectedStartDay')}
                                                    className="event-form-input event-form-date"
                                                    onClick={this.showStartDate}
                                                />
                                                <input
                                                    type="time"
                                                    value={(this.state.start_time) ? moment(this.state.start_time).format('kk:mm') : "19:00:00"}
                                                    onChange={this.update('selectedStartTime')}
                                                    className="event-form-input event-form-time"
                                                />
                                            </div>
                                        </div>
                                    </label>

                                    {
                                        this.state.showStartDate ? (
                                            <div className="day-picker-popup" ref={(element) => {
                                                this.startDateMenu = element;
                                            }}>
                                                <DayPicker
                                                    onDayClick={this.handleStartDayClick}
                                                    selectedDays={this.state.selectedStartDay}
                                                />
                                            </div>
                                        ) : (null)
                                    }

                                    <label className="event-step-container">
                                        <div className="event-step-details">
                                            <p className="event-step-label">End</p>
                                            <div className="event-date-time">
                                                <input
                                                    type="text"
                                                    value={(this.state.end_time) ? new Date(this.state.end_time).toLocaleDateString('en-US') : "Select an end date"}
                                                    onChange={this.update('selectedEndDay')}
                                                    className="event-form-input event-form-date"
                                                    onClick={this.showEndDate}
                                                />
                                                <input
                                                    type="time"
                                                    value={(this.state.end_time) ? (moment(this.state.end_time).format('kk:mm')) : "19:00:00"}
                                                    onChange={this.update('selectedEndTime')}
                                                    className="event-form-input event-form-time"
                                                />
                                            </div>
                                        </div>
                                    </label>

                                    {
                                        this.state.showEndDate ? (
                                            <div className="day-picker-popup" ref={(element) => {
                                                this.endDateMenu = element;
                                            }}>
                                                <DayPicker
                                                    onDayClick={this.handleEndDayClick}
                                                    selectedDays={this.state.selectedEndDay}
                                                />
                                            </div>
                                        ) : (null)
                                    }

                                    <label className="event-step-container">
                                        <div className="event-step-details" >
                                            <p className="event-step-label">Description</p>
                                            <p className="event-step-description-caption">Let your attendees know what to expect, including the agenda, what they need to bring, and how to find the group.</p>
                                            <textarea
                                                value={this.state.description}
                                                onChange={this.update('description')}
                                                className="event-form-input event-textarea"
                                            />
                                        </div>
                                    </label>

                                    <label className="event-step-container">
                                        <div className="event-step-details">
                                            <p className="event-step-label">Location</p>
                                            <input
                                                type="text"
                                                id="autocomplete"
                                                value={this.state.address}
                                                onChange={this.update('address')}
                                                className="event-form-input"
                                                placeholder="Search a location"
                                            />
                                        </div>
                                    </label>
                                    <div className="event-form-footer">
                                        <input className="group-form-submit" type="submit" value="Publish" />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="event-form-right">
                            <div className="event-form-description">
                                <h2>Tips for a great event</h2>
                                <h3>Be descriptive</h3>
                                <p>A good title immediately gives people an idea of what the event is about.</p>
                                <h3>Get organized</h3>
                                <p>Describe things in a clear order so it's easy to digest. Start with an overall description of the event and include a basic agenda, before you move into really specific details.</p>
                                <h3>Add an image</h3>
                                <p>Upload a photo or image to give members a better feel for the event.</p>
                            </div>
                        </div>


                    </div>
                </div>
            </>
        )
    }
}

export default EditEvent;