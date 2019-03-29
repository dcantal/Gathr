import {
    RECEIVE_GROUPS,
    RECEIVE_GROUP
} from '../actions/group_actions';
import merge from 'lodash/merge'

const groupsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch(action.type) {
        case RECEIVE_GROUPS:
            return action.groups;
        case RECEIVE_GROUP:
            return merge({}, state, {[action.group.id]: action.group});
        default:
            return state;
    }
};

export default groupsReducer;