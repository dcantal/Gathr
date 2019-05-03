import { connect } from 'react-redux';
import EventIndex from './event_index';
import { fetchEvents } from '../../../actions/event_actions';
import * as moment from 'moment';

const mapStateToProps = (state, ownProps) => {
    let events = Object.values(state.entities.events);
    let event_days_date = events.map((event) => {
        return (event.start_time);
    });
    // let event_days = event_days_date.sort().map((date) => {
    //     return (moment(date).format('dddd, MMMM D'));
    // });
    let event_days = event_days_date.sort();
    let unique_days = [...new Set(event_days)];
    let matches = [];
    if (ownProps.matches) {
        matches = ownProps.matches;
    }
    // let currentUserGroups = state.entities.users[state.session.id].groups;
    return {
        events: events,
        // matches: [],
        matches: matches,
        event_days: unique_days,
        // currentUserGroups: currentUserGroups,
    };
};

const mapDispatchToProps = dispatch => {
    return ({
        fetchEvents: () => dispatch(fetchEvents())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(EventIndex);