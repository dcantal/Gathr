import React from 'react';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
        this.navigateToFind = this.navigateToFind.bind(this);
    }

    navigateToFind() {
        this.props.history.push('/find');
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
        this.navigateToFind();
    }

    demoLogin(e) {
        e.preventDefault();
        new Typed("#login-input-email", {
            strings: ['danteacantal@gmail.com'],
            typeSpeed: 40,
            loop: false,
        });
        setTimeout(() => 
            {
                new Typed("#login-input-pass", 
                {
                    strings: ['testtest'],
                    typeSpeed: 40,
                    loop: false,
                });
            }, 1500);
        setTimeout(() => {this.props.processForm({email: "danteacantal@gmail.com", password: "testtest"});}, 3000);
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    renderErrors() {
        if (this.props.errors.length > 0) { 
            return (
                <div className="error-stripe">
                    <div className="error-box">
                        <h1 className="error-text">Your email or password was entered incorrectly.</h1>
                        <p className="error-caption"> Please try again or <Link to="/register">Sign up</Link></p>
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
                            <div className="login-form-top">
                                <div className="form-title">
                                    <h1>Log in</h1>
                                    <img src="https://secure.meetupstatic.com/s/img/09300654065624139187/icon/icon_padlock.gif"></img>
                                </div>
                                <br />
                                Not registered with us yet? <Link to="/register">Sign up</Link>
                            </div>
                            <div className="login-form">
                                <br />
                                <label>Email address:
                                <br />
                                <input type="text"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                    className="login-input"
                                    id="login-input-email"
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
                                    id="login-input-pass"
                                />
                                </label>
                                <br />
                                <br />
                                <br />
                                <input className="session-submit" type="submit" value={this.props.formType} />
                                {/* <input className="demo-session-submit" type="submit" value={this.props.formType} /> */}
                            </div>
                            <div className="form-footer">
                                <div className="orbox">
                                    <div className="orword">
                                        OR
                                    </div>
                                </div>
                                <button onClick={this.demoLogin} className="session-submit-demo">Login as Demo User</button>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}

export default SessionForm;