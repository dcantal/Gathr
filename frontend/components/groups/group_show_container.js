import { connect } from 'react-redux';

import { fetchGroup } from '../../actions/group_actions';
import { selectGroup } from '../../reducers/selectors';
import GroupShow from './group_show';

const mapStateToProps = (state, ownProps) => {
    const groupId = parseInt(ownProps.match.params.groupId);
    const group = selectGroup(state.entities, groupId);
    return {
        groupId,
        group
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchGroup: id => dispatch(fetchGroup(id))
    };
};


export default connect( mapStateToProps, mapDispatchToProps)(GroupShow);