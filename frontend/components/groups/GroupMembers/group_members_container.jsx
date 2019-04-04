import { connect } from 'react-redux';
import GroupMembers from './group_members';

const mapStateToProps = (state, ownProps) => {
    return {
        members: Object.values(state.members) || []
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupMembers);
