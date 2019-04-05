import { connect } from 'react-redux';
import GroupMembers from './group_members';
import { fetchGroup } from '../../../actions/group_actions';

const mapStateToProps = (state) => {
    return {
        memberIDs: state.entities.groups[Object.keys(state.entities.groups)[0]].members,
        member_info: state.entities.groups[Object.keys(state.entities.groups)[0]].member_info
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupMembers);
