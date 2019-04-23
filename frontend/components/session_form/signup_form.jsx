import React from 'react';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
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

    demoLogin(e) {
        e.preventDefault();
        this.props.demoLogin({ email: "danteacantal@gmail.com", password: "testtest" });
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    renderErrors() {
        if (this.props.errors.length > 0) {
            return (
                <div className="error-stripe">
                    <div className="error-box">
                        {/* <h1 className="error-text">Your email or password was entered incorrectly.</h1>
                        <p className="error-caption"> Please try again or {this.props.navLink}</p> */}
                        <ul>
                            {this.props.errors.map((error, i) => (
                                <li key={`error-${i}`} className="error-text">
                                    {error}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <>
                {this.renderErrors()}
                <div className="signup-form-stripe">
                    <div className="signup-form-title">
                        <h1>Sign up</h1>
                    </div>
                    <div className="signup-form-container">
                        <button onClick={this.demoLogin} className="session-submit-demo">Login as Demo User</button>
                        <form onSubmit={this.handleSubmit} className="signup-form-box">
                            <div className="signup-form">
                                <br />
                                <label>Your name
                                <br />
                                    <input type="text"
                                        value={this.state.username}
                                        onChange={this.update('username')}
                                        className="login-input"
                                    />
                                </label>
                                <br />
                                <br />
                                <label>Email address
                                <br />
                                    <input type="text"
                                        value={this.state.email}
                                        onChange={this.update('email')}
                                        className="login-input"
                                    />
                                </label>
                                <br />
                                <br />
                                <label>Password
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
                                <p className="disclaimer">
                                    Your name is public. We'll use your email address to send you updates, 
                                    and your location to find Meetups near you.
                                </p>
                                <input className="session-submit-signup" type="submit" value={this.props.formType} />
                                <p className="disclaimer-tos">
                                    When you "Continue", you agree to Gathr's Terms of Service.
                                     We will manage information about you as described in our 
                                     Privacy Policy, and Cookie Policy.
                                </p>
                            </div>
                        </form>
                        <div className="signup-form-footer">
                            Already a member? {this.props.navLink}
                        </div>
                    </div>
                </div>
            </>
        );
    }

    //WAS USED WHEN A MODAL SIGNUP FORM WAS MADE//

    // renderErrors() {
    //     let errors = Object.values(this.props.errors);
    //     return (
    //         <ul>
    //             {errors.map((error, i) => (
    //                 <li key={`error-${i}`}>
    //                     {error}
    //                 </li>
    //             ))}
    //         </ul>
    //     );
    // }

    // render() {
    //     return (
    //         <div className="modal is-open signup-form-container">
    //             <form onSubmit={this.handleSubmit} className="modal-form login-form-box">
    //                 <span className="modal-close js-modal-close">&times;</span>
    //                 <h1>Sign up</h1>
    //       <br />
    //                 Already a member? {this.props.navLink}
    //                 {this.renderErrors()}
    //                 <div className="login-form">
    //                     <br />
    //                     <label>Name:
    //           <input type="text"
    //                             value={this.state.username}
    //                             onChange={this.update('username')}
    //                             className="login-input"
    //                         />
    //                     </label>
    //                     <br />
    //                     <label>Email:
    //           <input type="text"
    //                             value={this.state.email}
    //                             onChange={this.update('email')}
    //                             className="login-input"
    //                         />
    //                     </label>
    //                     <br />
    //                     <label>Password:
    //           <input type="password"
    //                             value={this.state.password}
    //                             onChange={this.update('password')}
    //                             className="login-input"
    //                         />
    //                     </label>
    //                     <br />
    //                     <input className="session-submit" type="submit" value={this.props.formType} />
    //                 </div>
    //             </form>
    //             <div className="modal-screen"></div>
    //         </div>
    //     );
    // }
}

export default SignupForm;