import { connect } from 'react-redux';
import GroupMembers from './group_members';
import { fetchGroup } from '../../../actions/group_actions';

const mapStateToProps = (state) => {
    return {

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchGroup: id => dispatch(fetchGroup(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupMembers);
