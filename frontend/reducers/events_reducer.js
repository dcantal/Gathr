import {
    RECEIVE_EVENTS,
    RECEIVE_EVENT
} from '../actions/event_actions';

import merge from 'lodash/merge';

const eventsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch(action.type) {
        case RECEIVE_EVENTS:
            return action.events;
        case RECEIVE_EVENT:
            newState = merge({}, state, {[action.event.id]: action.event});
            return newState;
        default:
            return state;
    }
};

export default eventsReducer;