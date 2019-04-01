import { connect } from 'react-redux';
import GroupShow from './group_show';
import { fetchGroup } from '../../actions/group_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        group: state.entities.groups[ownProps.match.params.groupId]
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchGroup: id => dispatch(fetchGroup(id))
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