import { connect } from 'react-redux';
import EventIndex from './event_index';
import { fetchEvents } from '../../../actions/event_actions';
import * as moment from 'moment';

const mapStateToProps = (state, ownProps) => {
    let events = Object.values(state.entities.events);
    let event_days_date = events.map((event) => {
        return (event.start_time);
    });
    let event_days = event_days_date.sort();
    let unique_days = [...new Set(event_days)];
    let matches = [];
    if (ownProps.matches) {
        matches = ownProps.matches;
    }
    return {
        events: events,
        matches: matches,
        event_days: unique_days,
    };
};

const mapDispatchToProps = dispatch => {
    return ({
        fetchEvents: () => dispatch(fetchEvents())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(EventIndex);