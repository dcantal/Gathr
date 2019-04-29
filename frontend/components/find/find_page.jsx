import React from 'react';
import GroupIndexContainer from '../groups/group_index_container';
import EventIndexContainer from '../events/event_index/event_index_container';
import { Link } from 'react-router-dom';
import Script from 'react-load-script';

class FindPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = { query: "New York, NY, USA" };
        this.handleScriptLoad = this.handleScriptLoad.bind(this);
        this.handlePlaceSelect = this.handlePlaceSelect.bind(this);
    }

    componentDidMount() {
        // debugger
        // this.props.receiveCurrentUser();
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }
    
    handleScriptLoad() {
        const options = { types: ['(cities)'] };
        this.autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete-find'), options);
        this.autocomplete.addListener('place_changed', this.handlePlaceSelect);
    }

    handlePlaceSelect() {
        let addressObject = this.autocomplete.getPlace();
        if (addressObject) {
            this.setState({
                query: addressObject.formatted_address,
            });
        }
    }

    render() {
        // debugger
        // if (!this.props.currentUserGroups) {
        //     debugger
        //     return (
        //         <div className="loading-icon">
        //         <img src="https://loading.io/spinners/spinner/index.ajax-spinner-preloader.svg" />
        //         </div>
        //     );
        // }
        return (
            <div className="member-home-banner">
                <Script url="https://maps.googleapis.com/maps/api/js?key=AIzaSyBReG7fbGJa7BQ_j887_om_hWgaX2XEP_c&libraries=places" onLoad={this.handleScriptLoad} />
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
                            <h3 className="filter-text">within 10 miles of </h3>
                            <input
                                type="text"
                                value={this.state.query}
                                onChange={this.update('query')}
                                id="autocomplete-find"
                                className="group-form-input"
                            />
                        </div>  
                        <div className="find-button-div">
                            <button className="find-button find-groups">Groups</button>
                            <button className="find-button find-calendar">Calendar</button>
                        </div>
                    </div>

                </div>
                <GroupIndexContainer />
                <EventIndexContainer />
            </div>
        )
    }
}

export default FindPage;