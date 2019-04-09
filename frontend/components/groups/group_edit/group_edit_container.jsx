import { connect } from 'react-redux';
import GroupEdit from './group_edit';
import { fetchGroup, updateGroup } from '../../../actions/group_actions';

const mapStateToProps = (state, ownProps) => {
    const currentUser = state.entities.users;
    return ({
        group: state.entities.groups[ownProps.match.params.groupId] || {name: '', description: '', hometown: '', private: false},
        user: currentUser,
    });
};

const mapDispatchToProps = dispatch => {
    return {
        fetchGroup: id => dispatch(fetchGroup(id)),
        updateGroup: group => dispatch(updateGroup(group)),
    };


};


export default connect(mapStateToProps, mapDispatchToProps)(GroupEdit);