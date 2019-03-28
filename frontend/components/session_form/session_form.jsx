import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    renderErrors() {
        if (this.props.errors.length > 0) { 
            return (
                <div className="error-stripe">
                    <div className="error-box">
                        <h1 className="error-text">Your email or password was entered incorrectly.</h1>
                        <p className="error-caption"> Please try again or {this.props.navLink}</p>
                        {/* <ul>
                            {this.props.errors.map((error, i) => (
                                <li key={`error-${i}`}>
                                    {error}
                                </li>
                            ))}
                        </ul> */}
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <>
                {this.renderErrors()}
                <div className="login-form-stripe">
                    <div className="login-form-container">
                        <form onSubmit={this.handleSubmit} className="login-form-box">
                            <h1>Log in</h1>
                            <br />
                            Not registered with us yet? {this.props.navLink}
                            <div className="login-form">
                                <br />
                                <label>Email address:
                                <br />
                                <input type="text"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                    className="login-input"
                                />
                                </label>
                                <br />
                                <br />
                                <label>Password:
                                <br />
                                <input type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    className="login-input"
                                />
                                </label>
                                <br />
                                <br />
                                <br />
                                <input className="session-submit" type="submit" value={this.props.formType} />
                            </div>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}

export default SessionForm;