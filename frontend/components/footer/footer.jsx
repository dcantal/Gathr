import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="footer-stripe">
                <div className="footer-stripe-top">
                    <div className="footer-content">
                        <div className="footer-content-new-group">
                            <Link className="footer-create" to="/groups/new">
                                Start a new group
                            </Link>
                        </div>
                        <div className="footer-content-links">
                            <div className="footer-links-column">
                                <h4>Your Account</h4>
                                <h1>Sign up</h1>
                                <h1>Log in</h1>
                                <h1>Help</h1>
                            </div>
                            <div className="footer-links-column">
                                <h4>Discover</h4>
                                <h1>Groups</h1>
                                <h1>Calendar</h1>
                                <h1>Topics</h1>
                                <h1>Cities</h1>
                            </div>
                            <div className="footer-links-column">
                                <h4>Meetup</h4>
                                <h1>About</h1>
                                <h1>Meetup Pro</h1>
                                <h1>Careers</h1>
                                <h1>Apps</h1>
                                <h1>API</h1>
                            </div>
                            <div className="footer-links-column">
                                <h4>Your Account</h4>
                                <h1>Sign up</h1>
                                <h1>Log in</h1>
                                <h1>Help</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-stripe-bottom">
                    <div className="footer-content">
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;