
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

class CreateEventForm extends React.Component {
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
        this.props.fetchGroup(this.props.match.params.groupId);
    }

    handleFile(e) {
        this.setState({ photoFile: e.currentTarget.files[0] });
    }

    update(field) {
        return (e) => {
            this.setState({[field]: e.target.value });
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
            this.setState({ showStartDate: false}, () => {
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
            this.setState({ showEndDate: false}, () => {
                document.removeEventListener('click', this.closeEndDate);
            });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        let start_date = moment(this.state.selectedStartDay).format("MM-DD-YYYY");
        let start_datetime = moment(start_date + " " + this.state.selectedStartTime).format("MM-DD-YYYY hh:mm A" );
        let end_date = moment(this.state.selectedEndDay).format("MM-DD-YYYY");
        let end_datetime = moment(end_date + " " + this.state.selectedEndTime).format("MM-DD-YYYY hh:mm A");
        const formData = new FormData();
        formData.append('event[group_id]', this.props.currentGroup.id);
        formData.append('event[name]', this.state.name);
        formData.append('event[description]', this.state.description);
        formData.append('event[latitude]', this.state.latitude);
        formData.append('event[longitude]', this.state.longitude);
        formData.append('event[start_time]', start_datetime);
        formData.append('event[end_time]', end_datetime);
        if (this.state.photoFile) {
            formData.append('event[photo]', this.state.photoFile);
        }

        $.ajax({
            url: `api/groups/${event.groupId}/events`,
            method: 'POST',
            data: formData,
            contentType: false,
            processData: false
        }).then((payload) => this.props.createRsvp({user_id: this.props.currentUser, event_id: payload.event.id, organizer: true }))
            .then((payload) => {
                this.props.history.push(`/events/${payload.event.id}`);
        });

        // $.ajax({
        //     url: `api/groups/${event.groupId}/events`,
        //     method: 'POST',
        //     data: formData,
        //     contentType: false,
        //     processData: false
        // });
    }
    
    handleStartDayClick(day) {
        this.setState({ selectedStartDay: day });
    }

    handleEndDayClick(day) {
        this.setState({ selectedEndDay: day });
    }

    handleScriptLoad() {
        // const options = { types: ['(cities)', 'address', 'establishment'] };
        // const options = { types: ['(cities)'] };
        const options = { types: ['geocode','establishment'] };
        this.autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'), options);
        this.autocomplete.addListener('place_changed', this.handlePlaceSelect);
    }

    handlePlaceSelect() {
        let addressObject = this.autocomplete.getPlace();
        let address = addressObject.geometry.location;
        let lat = address.lat();
        let lng = address.lng();
        if (address) {
            this.setState({
                latitude: lat,
                longitude: lng,
            });
        }
    }


    render() {
        if (!this.props.currentGroup) {
            return <div className="loading-icon"><img src="https://loading.io/spinners/spinner/index.ajax-spinner-preloader.svg"></img></div>;
        }

        return (
            <>
                <Script url="https://maps.googleapis.com/maps/api/js?key=AIzaSyBReG7fbGJa7BQ_j887_om_hWgaX2XEP_c&libraries=places" onLoad={this.handleScriptLoad} />
                <div className="full-event-page">
                    <div className="event-form">
                        <div className="event-form-left">
                            <div className="event-form-header">
                                <h1>Create an event</h1>
                                <h2>{this.props.currentGroup.name}</h2>
                            </div>
                            <div className="event-form-wrapper">
                                <form onSubmit={this.handleSubmit} className="create-event-form">
                                    <label className="event-step-container">
                                        <div className="event-step-details">
                                            <p className="event-step-label">Title</p>
                                            <input
                                                type="text"
                                                // value={this.state.name}
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
                                                    value={ (this.state.selectedStartDay) ? this.state.selectedStartDay.toLocaleDateString() : "Select a start date"}
                                                    onChange={this.update('selectedStartDay')}
                                                    className="event-form-input event-form-date"
                                                    onClick={ this.showStartDate }
                                                />
                                                {/* <DayPickerInput
                                                    placeholder="Select a start date"
                                                    onDayChange={day => this.setState({selectedStartDate: day})}/>
                                                     */}
                                                <input
                                                    type="time"
                                                    value={ (this.state.selectedStartTime) ? this.state.selectedStartTime : "19:00:00" }
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
                                                    value={ (this.state.selectedEndDay) ? this.state.selectedEndDay.toLocaleDateString() : "Select an end date"}
                                                    onChange={this.update('selectedEndDay')}
                                                    className="event-form-input event-form-date"
                                                    onClick={ this.showEndDate }
                                                />
                                                <input
                                                    type="time"
                                                    value={ (this.state.selectedEndTime) ? this.state.selectedEndTime : "19:00:00" }
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
                                        <div className="event-step-details">
                                            <p className="event-step-label">Featured Photo</p>
                                            <div className="event-upload-photo-div">
                                                <label htmlFor="file" className="upload-event-photo">Upload photo
                                                <input type="file" className="inputfileevent"
                                                        onChange={this.handleFile.bind(this)}
                                                        />
                                                </label>
                                            </div>
                                        </div>
                                    </label>

                                    <label className="event-step-container">
                                        <div className="event-step-details">
                                            <p className="event-step-label">Description</p>
                                            <p className="event-step-description-caption">Let your attendees know what to expect, including the agenda, what they need to bring, and how to find the group.</p>
                                            <textarea
                                                // value={this.state.description}
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
                                                // value={this.state.hometown}
                                                id="autocomplete"
                                                onChange={this.update('hometown')}
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
                                {/* <br/> */}
                                <h3>Be descriptive</h3>
                                <p>A good title immediately gives people an idea of what the event is about.</p>
                                {/* <br/> */}
                                <h3>Get organized</h3>
                                <p>Describe things in a clear order so it's easy to digest. Start with an overall description of the event and include a basic agenda, before you move into really specific details.</p>
                                {/* <br/> */}
                                <h3>Add an image</h3>
                                <p>Upload a photo or image to give members a better feel for the event.</p>
                            </div>
                        </div>

                        
                    </div>
                    {/* <div className="event-form-footer">
                        <h1>Submit</h1>
                    </div> */}
                </div>
            </>
        )
    }
}

export default CreateEventForm;