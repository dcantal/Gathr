import { connect } from 'react-redux';
import EventIndex from './event_index';
import { fetchEvents } from '../../../actions/event_actions';

const mapStateToProps = state => {
    let events = Object.values(state.entities.events);
    return {
        events: events
    };
};

const mapDispatchToProps = dispatch => {
    debugger
    return ({
        fetchEvents: () => dispatch(fetchEvents())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(EventIndex);