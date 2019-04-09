import { connect } from 'react-redux';
import GroupSettings from './group_settings';
import { fetchGroup } from '../../../actions/group_actions';

const mapStateToProps = (state,ownProps) => {
    const currentUser = state.entities.users;
    return ({
        group: state.entities.groups[ownProps.match.params.groupId],
        user: currentUser,
    });
};

const mapDispatchToProps = dispatch => {
    return {
        fetchGroup: id => dispatch(fetchGroup(id)),
    };
    

};


export default connect(mapStateToProps, mapDispatchToProps)(GroupSettings);