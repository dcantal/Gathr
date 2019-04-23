import { connect } from 'react-redux';
import EventAttendees from './event_attendees';
import { fetchEvent } from '../../../actions/event_actions';

const mapStateToProps = (state) => {
    return {

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchEvent: id => dispatch(fetchEvent(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventAttendees);
