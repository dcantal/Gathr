import React from 'react';
import { Link } from 'react-router-dom';
// import meetupvideo from '../../../app/assets/videos/meetupbanner.mp4';

class videoBanner extends React.Component {

    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="video-banner">
                <div className="overlay"></div>
                <video src="https://www.meetup.com/mu_static/en-US/video.dddafbfe.mp4" className="video" autoPlay loop muted></video>
                {/* <video src={require("../../../app/assets/videos/meetupbanner.mp4")} className="video" autoPlay loop muted></video> */}
                {/* <img src={require("../../../app/assets/images/meetup_logo.svg")}></img> */}
                <div className="banner-content">
                    <div className="banner-content-item">
                        <h1 className="banner-text">The real world is calling</h1>
                    </div>
                    <div className="banner-content-item">
                        <h1 className="banner-text-caption">Join a local group to meet people, try something new, or do more of what you love.</h1>
                    </div>
                    <div className="banner-content-item">
                        <Link to="/signup"><button className="join-button">Join Meetup</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default videoBanner;