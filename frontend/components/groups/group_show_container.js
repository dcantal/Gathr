import { connect } from 'react-redux';
import GroupShow from './group_show';
import { fetchGroup, fetchMembers, createMembership, deleteMembership, updateGroup  } from '../../actions/group_actions';


const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.session.id,
        group: state.entities.groups[ownProps.match.params.groupId],
        // memberIDs: state.entities.groups[ownProps.match.params.groupId].members,
        // members: state.entities.groups[ownProps.match.params.groupId].members,
        // members: state.entities.groups[ownProps.match.params.groupId].member_info
        // members: []
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


// import { connect } from 'react-redux';

// import { fetchGroup } from '../../actions/group_actions';
// import { selectGroup } from '../../reducers/selectors';
// import GroupShow from './group_show';

// const mapStateToProps = (state, { match }) => {
//     const groupId = parseInt(match.params.groupId);
//     const group = selectGroup(state.entities, groupId);
//     return {
//         groupId,
//         group
//     };
// };

// const mapDispatchToProps = dispatch => {
//     return {
//         fetchGroup: id => dispatch(fetchGroup(id))
//     };
// };


// export default connect( mapStateToProps, mapDispatchToProps)(GroupShow);