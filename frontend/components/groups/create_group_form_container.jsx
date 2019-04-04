import { connect } from 'react-redux';
import GroupForm from './group_form';
import { createGroup } from '../../actions/group_actions';
import { createMembership } from '../../actions/membership_actions';

const mapStateToProps = state => {
    const currentUser = state.entities.users;
    return ({
        name: '', hometown: '', description:'', private: false,
        membership: { group_id: null, user_id: currentUser.id, organizer: true}
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        action: (group) => dispatch(createGroup(group)),
        createMembership: (membership) => dispatch(createMembership(membership))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupForm);