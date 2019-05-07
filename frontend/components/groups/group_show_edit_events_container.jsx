import { connect } from 'react-redux';
import GroupShowEditEvents from './group_show_edit_events';
import { fetchGroup } from '../../actions/group_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.session.id,
        group: state.entities.groups[ownProps.match.params.groupId],
        events: state.entities.events,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchGroup: id => dispatch(fetchGroup(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupShowEditEvents);