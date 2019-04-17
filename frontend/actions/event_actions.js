import * as APIUtil from '../util/event_api_util';

export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";


export const receiveEvents = (events) => {
    return ({
        type: RECEIVE_EVENTS,
        events
    });
};

export const receiveEvent = ({event}) => {
    return ({
        type: RECEIVE_EVENT, 
        event
    });
};

export const fetchEvents = () => dispatch => {
    return (
        APIUtil.fetchEvents().then((events) => dispatch(receiveEvents(events)))
    );
};

export const fetchEvent = (id) => dispatch => {
    return (
        APIUtil.fetchEvent(id).then((event) => dispatch(receiveEvent(event)))
    );
};

export const createEvent = (event) => dispatch => {
    return (
        APIUtil.createEvent(event).then((event) => dispatch(receiveEvent(event)))
    );
};

export const updateEvent = (event) => dispatch => {
    return (
        APIUtil.updateEvent(event).then((event) => dispatch(receiveEvent(event)))
    );
};

