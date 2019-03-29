import React from 'react';
import { Link } from 'react-router-dom';

class FindPage extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="member-home-banner">
                <div className="find-banner">
                    <div className="overlay"></div>
                    <div className="banner-content">
                        <div className="banner-content-item">
                            <h1 className="banner-text">Find your next event</h1>
                        </div>
                        <div className="banner-content-item-details">
                            <p className="find-banner-text-caption">98 events in your groups</p>
                            <p className="find-banner-text-caption">5,261 events near you</p>
                        </div>
                    </div>
                </div>
                <div className="find-navbar-wrap">
                    <div id="findNavBar">   
                        <h1>SEARCH BAR GOES HERE</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default FindPage;