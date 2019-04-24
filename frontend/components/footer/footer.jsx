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
                        <div className="footer-thank-you">
                            <h4>Gathr was made with love by Dante Cantal</h4>
                        </div>
                        <div className="footer-content-links">
                            {/* <a href="#"><img src=""/></a> */}
                            
                            <a href="https://www.linkedin.com/in/danteacantal" target="_blank"><img className="footer-img" src="https://s3.amazonaws.com/gathr-dc-seeds/In-White-128%402x.png"/></a>
                            <a href="https://www.github.com/dcantal" target="_blank"><img className="footer-img" src="https://s3.amazonaws.com/gathr-dc-seeds/GitHub-Mark-Light-120px-plus.png"/></a>
                            <a href="https://www.angel.co/dante-cantal" target="_blank"><img className="footer-img-angel" src="https://s3.amazonaws.com/gathr-dc-seeds/AngelList_White_Victory_Hand.png"/></a>
                            {/* <div className="footer-links-column">
                                <h4>Your Account</h4>
                                <h1>Sign up</h1>
                                <h1>Log in</h1>
                            </div>
                            <div className="footer-links-column">
                                <h4>Discover</h4>
                                <h1>Groups and Events</h1>
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
                            </div> */}
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