import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { withRouter } from 'react-router-dom';
import Script from 'react-load-script';
// import { DayPickerInput } from 'react-day-picker/types/DayPickerInput';

class CreateEventForm extends React.Component {
    constructor(props) {
        super(props);
        let event = this.props.event;
        this.handleDayClick = this.handleDayClick.bind(this);
        this.showDate = this.showDate.bind(this);
        this.closeDate = this.closeDate.bind(this);
        this.showTime = this.showTime.bind(this);
        this.closeTime = this.closeTime.bind(this);
        this.state = {
            selectedDay: this.props.selectedDay,
            showDate: false,
            showTime: false,
        };

    }

    componentDidMount() {
        this.props.fetchGroup(this.props.match.params.groupId);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }

    showDate(event) {
        event.preventDefault();
        this.setState({
            showDate: true,
        }, () => {
            document.addEventListener('click', this.closeDate);
        });
    }

    closeDate() {
        if (!this.dateMenu.contains(event.target)) {
            this.setState({ showDate: false}, () => {
                document.removeEventListener('click', this.closeDate);
            });
        }
    }

    showTime(event) {
        event.preventDefault();
        this.setState({
            showTime: true,
        }, () => {
            document.addEventListener('click', this.closeTime);
        });
    }

    closeTime() {
        th9is.setState({ showTime: false }, () => {
            document.removeEventListener('click', this.closeTime);
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let that = this;
        this.props.action({ "name": this.state.name, "hometown": this.state.query, "description": this.state.description, "private": false })
            .then((payload) => {
                that.props.createMembership({ user_id: that.state.membership.user_id, group_id: payload.group.id, organizer: true })
                    .then((payload) => {
                        that.props.history.push(`/groups/${payload.group.id}`);
                    });
            });
    }
    
    handleDayClick(day) {
        this.setState({ selectedDay: day });
    }


    render() {
        if (!this.props.currentGroup) {
            return <div className="loading-icon"><img src="https://loading.io/spinners/spinner/index.ajax-spinner-preloader.svg"></img></div>;
        }

        return (
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
                                        <p className="event-step-label">Date and Time</p>
                                        <input
                                            type="text"
                                            value={ (this.state.selectedDay) ? this.state.selectedDay.toLocaleDateString() : "Select a date"}
                                            // onChange={this.update('start_time')}
                                            className="event-form-input"
                                            onClick={ this.showDate }
                                        />
                                    </div>
                                </label>

                                {
                                    this.state.showDate ? (
                                        <div className="day-picker-popup" ref={(element) => {
                                            this.dateMenu = element;
                                        }}>
                                        <DayPicker
                                            onDayClick={this.handleDayClick}
                                            selectedDays={this.state.selectedDay}
                                        />
                                    </div>
                                    ) : (null)
                                }
                                <label className="event-step-container">
                                    <div className="event-step-details">
                                        <p className="event-step-label">Date and Time</p>
                                        <input
                                            type="datetime-local"
                                            // value={this.state.start_time}
                                            onChange={this.update('start_time')}
                                            className="event-form-input"
                                        />
                                    </div>
                                </label>

                                <label className="event-step-container">
                                    <div className="event-step-details">
                                        <p className="event-step-label">Duration</p>
                                        <input
                                            // value={this.state.description}
                                            onChange={this.update('description')}
                                            className="event-form-input"
                                        />
                                    </div>
                                </label>

                                <label className="event-step-container">
                                    <div className="event-step-details">
                                        <p className="event-step-label">Description</p>
                                        <textarea
                                            // value={this.state.description}
                                            onChange={this.update('description')}
                                            className="event-form-input"
                                        />
                                    </div>
                                </label>
                                <div className="submit-stripe">
                                    <input className="group-form-submit" type="submit" value="Next" />
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
                <div className="event-form-footer">
                    <h1>Submit</h1>
                </div>
            </div>
        )
    }
}

export default CreateEventForm;