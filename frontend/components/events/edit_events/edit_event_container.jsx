import { connect } from 'react-redux';
import EditEvent from './edit_event';
import { fetchEvent, updateEvent } from '../../../actions/event_actions';

const mapStateToProps = (state, ownProps) => {
    const currentUser = state.entities.users;
    return ({
        event: state.entities.events[ownProps.match.params.eventId],
        user: currentUser,
    });
};

const mapDispatchToProps = dispatch => {
    return {
        fetchEvent: id => dispatch(fetchEvent(id)),
        updateEvent: event => dispatch(updateEvent(event)),
    };


};


export default connect(mapStateToProps, mapDispatchToProps)(EditEvent);