import React from 'react';
import { Link } from 'react-router-dom';
import GroupIndexContainer from '../groups/group_index_container';
import EventIndexContainer from '../events/event_index/event_index_container';
// import meetupvideo from '../../../app/assets/videos/meetupbanner.mp4';

class videoBanner extends React.Component {

    constructor(props){
        super(props);
    }
    render() {
        return (
            <>
                <div className="video-banner">
                    <div className="overlay"></div>
                    <video src="https://www.meetup.com/mu_static/en-US/video.dddafbfe.mp4" className="video" autoPlay loop muted></video>
                    <div className="banner-content">
                        <div className="banner-content-item">
                            <h1 className="banner-text">The real world is calling</h1>
                        </div>
                        <div className="banner-content-item">
                            <h1 className="banner-text-caption">Join a local Gathr group to meet people, try something new, or do more of what you love.</h1>
                        </div>
                        <div className="banner-content-item">
                            <Link to="/signup"><button className="join-button">Join Gathr</button></Link>
                        </div>
                    </div>
                </div>
                <GroupIndexContainer />
            </>
        )
    }
}

export default videoBanner;