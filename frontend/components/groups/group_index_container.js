import { connect } from 'react-redux';
import GroupIndex from './group_index';
import { fetchGroups, fetchGroup } from '../../actions/group_actions';

const mapStateToProps = state => {
    let groups = Object.values(state.groups);
    return ({
        groups: groups
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        fetchGroups: () => dispatch(fetchGroups()),
        deleteGroup: (groupId) => dispatch(deleteGroup(groupId))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupIndex);