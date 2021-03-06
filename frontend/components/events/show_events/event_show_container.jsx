import { connect } from 'react-redux';
import EventShow from './event_show';
import { fetchEvent, updateEvent, createRsvp, deleteRsvp } from '../../../actions/event_actions';


const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.session.id,
        event: state.entities.events[ownProps.match.params.eventId],
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchEvent: id => dispatch(fetchEvent(id)),
        updateEvent: event => dispatch(updateEvent(event)),
        createRsvp: rsvp => dispatch(createRsvp(rsvp)),
        deleteRsvp: rsvp => dispatch(deleteRsvp(rsvp)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventShow);