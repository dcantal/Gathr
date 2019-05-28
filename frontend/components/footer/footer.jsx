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
                            
                            <a href="https://www.linkedin.com/in/danteacantal" target="_blank"><img className="footer-img" src="https://s3.amazonaws.com/gathr-dc-seeds/In-White-128%402x.png"/></a>
                            <a href="https://www.github.com/dcantal" target="_blank"><img className="footer-img" src="https://s3.amazonaws.com/gathr-dc-seeds/GitHub-Mark-Light-120px-plus.png"/></a>
                            <a href="https://www.angel.co/dante-cantal" target="_blank"><img className="footer-img-angel" src="https://s3.amazonaws.com/gathr-dc-seeds/AngelList_White_Victory_Hand.png"/></a>
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