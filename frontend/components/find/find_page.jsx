import React from 'react';
import GroupIndexContainer from '../groups/group_index_container';
import EventIndexContainer from '../events/event_index/event_index_container';
import Search from '../search/search';
import { Link } from 'react-router-dom';
import Script from 'react-load-script';

class FindPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            search: '',
            query: "New York, NY, USA",
            names: Object.values(this.props.events).map(event => event.name),
            mode: "calendar",
        };
        this.handleScriptLoad = this.handleScriptLoad.bind(this);
        this.handlePlaceSelect = this.handlePlaceSelect.bind(this);
        this.matchesEvents = this.matchesEvents.bind(this);
        this.switchToCalendar = this.switchToCalendar.bind(this);
        this.switchToGroups = this.switchToGroups.bind(this);
    }

    componentDidMount() {
    }

    matchesGroups() {
        const matches = [];
        if (this.state.search.length === 0) return [];

        this.props.groups.forEach((group) => {
            let content = group.name + group.hometown + group.description;
            if (content.toLowerCase().includes(this.state.search.toLowerCase())) {
                matches.push(group.id);
            }
        });
        if (matches.length === 0) {
            matches.push(-1);
        }
        return matches;
    }

    matchesEvents() {
        const matches = [];
        if (this.state.search.length  === 0) return [];
        this.props.events.forEach((event) => {
            let content = event.name + event.description;
            if (content.toLowerCase().includes(this.state.search.toLowerCase())) {
                matches.push(event.id);
            }
        });

        if (matches.length === 0) {
            matches.push(-1);
        }
        return matches;
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }

    switchToCalendar() {
        this.setState({ mode: "calendar" });
    }

    switchToGroups() {
        this.setState({ mode: "groups" });
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
        if (!this.props.currentUser) {
          this.props.history.push('/');
        }
        return (
          <div className="member-home-banner">

            <div className="find-banner">
              <div className="overlay" />
              <div className="banner-content">
                <div className="banner-content-item gathring-content-item">
                  <h1 className="banner-text">
                    Find your next Gathring
                  </h1>
                </div>
                {/* <div className="banner-content-item-details">
                  <p className="find-banner-text-caption">
                    98 gathrings in your groups
                  </p>
                  <p className="find-banner-text-caption">
                    5,261 gathrings near you
                  </p>
                </div> */}
              </div>
            </div>
            <div className="find-navbar-wrap">
              <div id="findNavBar">
                <input
                  type="text"
                  onChange={this.update("search")}
                  className="find-search"
                  placeholder="Search"
                />

                <div className="find-button-div">
                  {/* <button className="find-button find-groups" onClick={this.switchToGroups}>Groups</button> */}
                  <button
                    className={`find-button find-groups ${
                      this.state.mode == "groups" ? "find-selected" : ""
                    }`}
                    onClick={this.switchToGroups}
                  >
                    Groups
                  </button>
                  {/* <button className="find-button find-calendar" onClick={this.switchToCalendar}>Calendar</button> */}
                  <button
                    className={`find-button find-calendar ${
                      this.state.mode == "calendar"
                        ? "find-selected"
                        : ""
                    }`}
                    onClick={this.switchToCalendar}
                  >
                    Calendar
                  </button>
                </div>
              </div>
            </div>
            {this.state.mode == "groups" ? (
              <>
                <GroupIndexContainer matches={this.matchesGroups()} />
              </>
            ) : (
              <EventIndexContainer matches={this.matchesEvents()} />
            )}
          </div>
        );
    }
}

export default FindPage;