
import React from 'react';
import { withRouter } from 'react-router-dom';

class GroupForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = this.props.group;
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state).then(() => this.props.history.push('/'));
    }

    render() {
        return (
            <div>
                <h3>{this.props.formType}</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>Name
            <input
                            type="text"
                            value={this.state.name}
                            onChange={this.update('name')} />
                    </label>

                    <label>Hometown
            <input
                            type="text"
                            value={this.state.hometown}
                            onChange={this.update('hometown')} />
                    </label>

                    <label>
                        <textarea
                            value={this.state.description}
                            onChange={this.update('description')} />
                    </label>

                    <input type="submit" value={this.props.formType} />
                </form>
            </div>
        );
    }
}

export default withRouter(GroupForm);