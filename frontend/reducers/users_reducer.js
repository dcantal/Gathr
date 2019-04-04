import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_GROUP } from '../actions/group_actions';
import { RECEIVE_MEMBERSHIP, REMOVE_MEMBERSHIP } from '../actions/membership_actions';
import merge from 'lodash/merge';

const usersReducer = (state={}, action) => {
    Object.freeze(state);
    let newState;
    debugger
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({}, state, {[action.currentUser.id]: action.currentUser});
        // case RECEIVE_GROUP:
        //     debugger
        //     newState = merge({}, state);
        //     return merge(newState, action.members);
        // case RECEIVE_GROUP:
        //     debugger
        //     newState = action.users || action.group.members || state;
        //     return newState;
        // case RECEIVE_GROUP:
        //     debugger
        //     newState = merge({}, state);
        //     return merge(newState[], state, action.group.members);
        // case RECEIVE_MEMBERSHIP:
        //     debugger
        //     newState = merge({}, state);
        //     newState = merge(newState[action.membership.membership.user_id], {memberships: {[action.membership.membership.id]: action.membership.membership}});
        //     return newState;
        default:
            return state;
    }
};

export default usersReducer;    