import React from 'react';
import { Link } from 'react-router-dom';

class SignupAlt extends React.Component {

    constructor(props) {
        super(props);
        this.demoLogin = this.demoLogin.bind(this);
    }

    demoLogin(e) {
        e.preventDefault();
        this.props.processForm({ email: "testing105@gmail.com", password: "testtest" });
    }

    render() {
        return (

            <div className='signup-alt-page-wrapper'>
                <div className="signup-alt-page">
                    <h1>Sign up</h1>
                    <button onClick={this.demoLogin} className="session-submit-demo">Login as Demo User</button>
                    <br />
                    <Link to="/signup">Or sign up with email</Link>
                </div>
                <div className="line-with-link">
                    <p>Already a member? </p>
                    &nbsp;
                    <Link to="/login">Log in.</Link>
                </div>
            </div>
        )
    }
}

export default SignupAlt;