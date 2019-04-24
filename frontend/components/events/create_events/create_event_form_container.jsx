import { connect } from 'react-redux';
import CreateEventForm from './create_event_form';
import { createEvent, createRsvp } from '../../../actions/event_actions';
import { fetchGroup } from '../../../actions/group_actions';

const mapStateToProps = (state, ownProps) => {
    return ({
        currentUser: state.session.id,
        event: {
            group_id: null, 
            name: '', 
            description: '', 
            start_time: null, 
            end_time: null,
            latitude: null,
            longitude: null,
            private: false,
        },
        selectedDay: null,
        selectedEnd: null,
        selectedTime: null,
        selectedEndTime: null,
        currentGroup: state.entities.groups[ownProps.match.params.groupId]
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        createEvent: (event) => dispatch(createEvent(event)),
        fetchGroup: (group) => dispatch(fetchGroup(group)),
        createRsvp: (rsvp) => dispatch(createRsvp(rsvp)),
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateEventForm);