import {
    RECEIVE_GROUPS,
    RECEIVE_GROUP
} from '../actions/group_actions';

import { 
    RECEIVE_MEMBERSHIP,
    REMOVE_MEMBERSHIP
} from '../actions/membership_actions';

import merge from 'lodash/merge';

const groupsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    debugger
    switch(action.type) {
        case RECEIVE_GROUPS:
            return action.groups;
        case RECEIVE_GROUP:
            debugger
            newState = merge({}, state, {[action.group.id]: action.group});
            return newState;
        // case RECEIVE_MEMBERSHIP:
        //     newState = merge({}, state);
        //     debugger    
        //     newState[action.membership.membership.group_id].members.push(action.membership.membership.user_id);
        //     return merge(newState, action.groups);
        case REMOVE_MEMBERSHIP:
        debugger
            return state;
        default:
            return state;
    }
};

export default groupsReducer;