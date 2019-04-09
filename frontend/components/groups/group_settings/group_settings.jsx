import React from 'react';
import { Link } from 'react-router-dom';

class GroupSettings extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.fetchGroup(this.props.match.params.groupId);
    }

    render() {
        if (!this.props.group) {
            // return null;
            return <div className="loading-icon"><img src="https://loading.io/spinners/spinner/index.ajax-spinner-preloader.svg"></img></div>;
        }
        return (
            <div className="manage-group-page">
                <div className="manage-group-header-stripe">
                    <div className="manage-group-header-content">
                        <h1>{this.props.group.name}</h1>
                    </div>
                </div>
                <div className="manage-group-settings-stripe">
                    <div className="manage-group-settings-content">
                        <Link className="manage-group-settings-back" to={`/groups/${this.props.group.id}`}>
                            <i className="fas fa-arrow-left"></i>
                            <h4>Back to {this.props.group.name}</h4>
                        </Link>
                        <div className="manage-group-settings-buttons-container">
                            <div className="manage-group-section-header">
                            </div>
                            <div className="manage-group-settings-buttons">
                                <Link className="manage-group-settings-button" to={`/groups/${this.props.group.id}/edit`}>
                                    <img className="settings-button-icon" src="https://s3.amazonaws.com/gathr-dc-seeds/rocket.svg"/>
                                    <h3>Basics</h3>
                                </Link>
                                <Link className="manage-group-settings-button" to="/edit">
                                    <img className="settings-button-icon" src="https://s3.amazonaws.com/gathr-dc-seeds/login.svg"/>
                                    <h3>Group Privacy</h3>
                                </Link>
                                <button className="manage-group-settings-button">
                                    <img className="settings-button-icon" src="https://s3.amazonaws.com/gathr-dc-seeds/x-button.svg"/>
                                    <h3>Delete Group</h3>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GroupSettings;