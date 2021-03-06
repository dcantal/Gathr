import {
    RECEIVE_EVENTS,
    RECEIVE_EVENT,
    REMOVE_RSVP,
} from '../actions/event_actions';

import {
    RECEIVE_GROUP
} from '../actions/group_actions';

import merge from 'lodash/merge';

const eventsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch(action.type) {
        case RECEIVE_EVENTS:
            return action.events;
        case RECEIVE_EVENT:
            // newState = merge({}, state, {[action.event.id]: action.event});
            newState = {[action.event.id]: action.event};
            return newState;
        case RECEIVE_GROUP:
            newState = merge({}, state, action.group.events);
            return newState;
        case REMOVE_RSVP:
            newState = {[action.rsvpId.event.id]: action.rsvpId.event};
            return newState;
        default:
            return state;
    }
};

export default eventsReducer;