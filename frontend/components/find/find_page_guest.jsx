import React from 'react';
import { Link } from 'react-router-dom';

class FindPage extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="video-banner">
                <div className="overlay"></div>
                <img src="https://images.unsplash.com/photo-1478812954026-9c750f0e89fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" className="video"></img>
                {/* <video src={require("../../../app/assets/videos/meetupbanner.mp4")} className="video" autoPlay loop muted></video> */}
                {/* <img src={require("../../../app/assets/images/meetup_logo.svg")}></img> */}
                <div className="banner-content">
                    <div className="banner-content-item">
                        <h1 className="banner-text">Meetups are</h1>
                    </div>
                    <div className="banner-content-item">
                        <h1 className="banner-text-caption">neighbors getting together to learn something, do something, share something…</h1>
                    </div>
                    <div className="banner-content-item">
                        <Link to="/signup"><button className="join-button">Join Meetup</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default FindPage;