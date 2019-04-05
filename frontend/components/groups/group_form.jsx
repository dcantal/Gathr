
import React from 'react';
import { withRouter } from 'react-router-dom';

class GroupForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        let group = this.props.group;
        let membership = this.props.membership;

        this.state = {group, membership};
    }

    update(field) {
        return (e) => {
            this.setState({[field]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        let that = this;
        this.props.action({"name": this.state.name, "hometown": this.state.hometown, "description": this.state.description, "private": false})
            .then((payload)=> {
                that.props.createMembership({user_id: that.state.membership.user_id, group_id: payload.group.id, organizer: true })
                .then((payload) => {
                    that.props.history.push(`/groups/${payload.group.id}`);
                });
            });
        }
    

    render() {
        return (
            <>
                <div className="form-page">
                    <div className="group-form-banner">
                        <div className="overlay"></div>
                        <img src="https://cdn.pixabay.com/photo/2016/11/29/04/18/hot-air-balloons-1867279_960_720.jpg" className="video"></img>
                        <div className="banner-content">
                            <div className="banner-content-item">
                                <h1 className="banner-text">Start a new Gathr Group</h1>
                            </div>
                            <div className="banner-content-item">
                                <h1 className="banner-text-caption">We'll help you find the right people to make it happen.</h1>
                            </div>
                        </div>
                    </div>
                    <div className="form-wrapper">
                        <form onSubmit={this.handleSubmit} className="group-form">
                            <label className="group-step-container">
                                <p className="step-label">STEP 1 OF 4</p>
                                <h1 className="group-form-properties">What's your new Gathr Group's hometown?</h1>
                                <input
                                    type="text"
                                    // value={this.state.hometown}
                                    onChange={this.update('hometown')}
                                    className="group-form-input"
                                    placeholder="Search for a city (Search not implemented yet. Just a string)"
                                />
                            </label>

                            <label className="group-step-container">
                                <p className="step-label">STEP 2 OF 4</p>
                                <h1 className="group-form-properties">What will your Gathr's name be?</h1>
                                <input
                                    type="text"
                                    // value={this.state.name}
                                    onChange={this.update('name')}
                                    className="group-form-input"
                                    placeholder="example: New York Hiking Meetup"
                                />
                            </label>

                            <label className="group-step-container" id="last-item">
                                <p className="step-label">STEP 3 OF 4</p>
                                <h1 className="group-form-properties">Describe who should join, and what your Gathr will do.</h1>
                                <textarea
                                    // value={this.state.description}
                                    onChange={this.update('description')}
                                    className="group-form-input-description"
                                />
                            </label>
                            <div className="submit-stripe">
                                <input className="group-form-submit" type="submit" value="Next" />
                            </div>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}

export default withRouter(GroupForm);