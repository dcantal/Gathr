import { connect } from 'react-redux';
import GroupShowEventIndex from './group_show_event_index';
import { fetchGroup } from '../../../actions/group_actions';

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return ({
        fetchGroup: (id) => dispatch(fetchGroup(id)),
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupShowEventIndex);