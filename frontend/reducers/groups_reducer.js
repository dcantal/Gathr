import {
    RECEIVE_GROUPS,
    RECEIVE_GROUP
} from '../actions/group_actions';

import {
    RECEIVE_EVENT
} from '../actions/event_actions';

import { 
    RECEIVE_MEMBERSHIP,
    REMOVE_MEMBERSHIP
} from '../actions/membership_actions';

import merge from 'lodash/merge';

const groupsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch(action.type) {
        case RECEIVE_GROUPS:
            return action.groups;
        case RECEIVE_GROUP:
            newState = merge({}, state, {[action.group.id]: action.group});
            return newState;
        case REMOVE_MEMBERSHIP:
            newState = merge({}, {[action.membershipId.group.id]: action.membershipId.group});
            return newState;
        case RECEIVE_EVENT:
            newState = merge({}, state, {[action.event.group_id]: action.event.group});
            return newState;
        default:
            return state;
    }
};

export default groupsReducer;