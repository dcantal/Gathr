import { connect } from 'react-redux';
import GroupIndex from './group_index';
import { fetchGroups, fetchGroup } from '../../actions/group_actions';

const mapStateToProps = (state, ownProps) => {
    let groups = Object.values(state.entities.groups);
    let matches = [];
    if (ownProps.matches) {
        matches = ownProps.matches;
    }
    return {
        groups: groups,
        matches: matches,
    };
};

const mapDispatchToProps = dispatch => {
    return ({
        fetchGroups: () => dispatch(fetchGroups()),
        deleteGroup: (groupId) => dispatch(deleteGroup(groupId))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupIndex);