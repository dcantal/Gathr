import { connect } from 'react-redux';
import GroupForm from './group_form';
import { createGroup } from '../../actions/group_actions';

const mapStateToProps = state => {
    return ({
        group: { name: '', hometown: '', description: '', private: false }
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        action: (post) => dispatch(createGroup(post))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupForm);