import { connect } from 'react-redux';
import GroupShow from './group_show';
import { fetchGroup, fetchMembers, createMembership, deleteMembership, updateGroup  } from '../../actions/group_actions';

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
        fetchMembers: id => dispatch(fetchMembers(id)),
        createMembership: membership => dispatch(createMembership(membership)),
        deleteMembership: membership => dispatch(deleteMembership(membership)),
        updateGroup: group => dispatch(updateGroup(group)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupShow);