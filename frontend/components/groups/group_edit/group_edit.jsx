import React from 'react';
import { Link } from 'react-router-dom';
import Script from 'react-load-script';

class GroupEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.group;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleScriptLoad = this.handleScriptLoad.bind(this);
        this.handlePlaceSelect = this.handlePlaceSelect.bind(this);
    }

    componentDidMount() {
        let that = this;
        this.props.fetchGroup(this.props.match.params.groupId).then(() => {
            this.setState({id: that.props.group.id, name: that.props.group.name, description: that.props.group.description, hometown: that.props.group.hometown, private: that.props.group.private });
        });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.group.id != this.props.match.params.groupId) {
            this.props.fetchGroup(this.props.match.params.groupId);
        }
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        let that = this;
        // this.props.updateGroup({ "id": this.props.group.id, "name": this.state.name, "hometown": this.state.hometown, "description": this.state.description, "private": this.state.private })
        //     .then((payload) => {
        //         that.props.history.push(`/groups/${payload.group.id}`);
        //     });

        const formData = new FormData();
        formData.append('group[id]', this.props.group.id);
        formData.append('group[name]', this.state.name);
        formData.append('group[hometown]', this.state.hometown);
        formData.append('group[description]', this.state.description);
        formData.append('group[private]', this.state.private);

        this.props.updateGroup(this.state)
            .then((payload) => {
                that.props.history.push(`/groups/${payload.group.id}`);
            });
    }

    handleScriptLoad() {
        const options = { types: ['(cities)'] };
        this.autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'), options);
        this.autocomplete.addListener('place_changed', this.handlePlaceSelect);
    }

    handlePlaceSelect() {
        let addressObject = this.autocomplete.getPlace();
        if (addressObject) {
            this.setState({
                hometown: addressObject.formatted_address,
            });
        }
    }

    render() {
        if (!this.props.group) {
            // return null;
            return <div className="loading-icon"><img src="https://loading.io/spinners/spinner/index.ajax-spinner-preloader.svg"></img></div>;
        }
        return (
            <div className="manage-group-page">
                <Script url="https://maps.googleapis.com/maps/api/js?key=AIzaSyBReG7fbGJa7BQ_j887_om_hWgaX2XEP_c&libraries=places" onLoad={this.handleScriptLoad} />
                <div className="manage-group-header-stripe">
                    <div className="manage-group-header-content">
                        <h1>{this.state.name}</h1>
                    </div>
                </div>
                <div className="manage-group-settings-stripe">
                    <div className="manage-group-settings-content">
                        <Link className="manage-group-settings-back" to={`/groups/${this.props.group.id}/manage`}>
                            <i className="fas fa-arrow-left"></i>
                            <h4>Back to group settings</h4>
                        </Link>
                        <h1>Basics</h1>
                        <div className="group-edit-section-stripe">
                            <h2>About this Gathr Group</h2>
                        </div>
                        <form onSubmit={this.handleSubmit} className="edit-group-form" action="javascript:;" encType="multipart/form-data">
                            <label className="group-step-container">
                                <div className="group-step-details">
                                    <p className="group-form-properties">Gathr Group name</p>
                                    <input
                                        type="text"
                                        value={this.state.name}
                                        onChange={this.update('name')}
                                        className="group-form-input"
                                    />
                                </div>
                            </label>

                            <label className="group-step-container">
                                <div className="group-step-details">
                                    <p className="group-form-properties">Gathr group description</p>
                                    <p className="group-form-properties">What is this Gathring's purpose? Who snould join? Why?</p>
                                    <textarea
                                        value={this.state.description}
                                        onChange={this.update('description')}
                                        className="group-form-input-description"
                                    />
                                </div>
                            </label>

                            <label className="group-step-container">
                                <div className="group-step-details">
                                    <p className="group-form-properties">City, State</p>
                                    <input
                                        type="text"
                                        id="autocomplete"
                                        value={this.state.hometown}
                                        onChange={this.update('hometown')}
                                        className="group-form-input"
                                    />
                                </div>
                            </label>
                            <div className="submit-stripe">
                                <input className="group-form-submit" type="submit" value="Save" />
                            </div>
                        </form>
                        <div className="manage-group-settings-buttons-container">
                            <div className="manage-group-section-header">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GroupEdit;