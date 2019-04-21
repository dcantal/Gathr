import { connect } from 'react-redux';
import GroupShowEventIndex from './group_show_event_index';
import { fetchGroup } from '../../../actions/group_actions';

const mapStateToProps = state => {
    let events = Object.values(state.entities.events);
    return {
        events: events
        // groups: []
    };
};

const mapDispatchToProps = dispatch => {
    return ({
        fetchGroup: () => dispatch(fetchGroup()),
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupShowEventIndex);