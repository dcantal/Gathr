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
                <div className="login-form-stripe">
                    <div className="login-form-container">
                        <form onSubmit={this.handleSubmit} className="login-form-box">
                            <h1>Sign up</h1>
                            <br />
                            Not registered with us yet? {this.props.navLink}
                            <div className="login-form">
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
                                <input className="session-submit" type="submit" value={this.props.formType} />
                            </div>
                        </form>
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