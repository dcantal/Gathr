import { connect } from 'react-redux';
import EventIndex from './event_index';
import { fetchEvents } from '../../../actions/event_actions';

const mapStateToProps = (state, ownProps) => {
    let events = Object.values(state.entities.events);
    let matches = [];
    if (ownProps.matches) {
        matches = ownProps.matches;
    }
    // let currentUserGroups = state.entities.users[state.session.id].groups;
    return {
        events: events,
        // matches: [],
        matches: matches,
        // currentUserGroups: currentUserGroups,
    };
};

const mapDispatchToProps = dispatch => {
    return ({
        fetchEvents: () => dispatch(fetchEvents())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(EventIndex);