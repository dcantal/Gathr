import React from 'react';
import GroupIndexContainer from '../groups/group_index_container';
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
                        <div className="banner-content-item gathring-content-item">
                            <h1 className="banner-text">Find your next Gathring</h1>
                        </div>
                        <div className="banner-content-item-details">
                            <p className="find-banner-text-caption">98 gathrings in your groups</p>
                            <p className="find-banner-text-caption">5,261 gathrings near you</p>
                        </div>
                    </div>
                </div>
                <div className="find-navbar-wrap">
                    <div id="findNavBar">
                        <input type="text" className="find-search" placeholder="Search"/> 
                        <div className="filter-text-div">
                            <h3 className="filter-text">within 10 miles of New York, NY</h3>
                        </div>  
                        <div className="find-button-div">
                            <button className="find-button find-groups">Groups</button>
                            <button className="find-button find-calendar">Calendar</button>
                        </div>
                    </div>

                </div>
                <GroupIndexContainer />
            </div>
        )
    }
}

export default FindPage;