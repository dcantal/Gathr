import { connect } from 'react-redux';
import EventIndex from './event_index';
import { fetchEvents } from '../../../actions/event_actions';

const mapStateToProps = state => {
    let events = Object.values(state.entities.events);
    // let currentUserGroups = state.entities.users[state.session.id].groups;
    return {
        events: events,
        // currentUserGroups: currentUserGroups,
    };
};

const mapDispatchToProps = dispatch => {
    return ({
        fetchEvents: () => dispatch(fetchEvents())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(EventIndex);