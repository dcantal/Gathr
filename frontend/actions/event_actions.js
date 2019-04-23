import * as APIUtil from '../util/event_api_util';
import * as RsvpAPIUtil from '../util/rsvp_api_util';

export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const RECEIVE_RSVP = "RECEIVE_RSVP";
export const REMOVE_RSVP = "REMOVE_RSVP";

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

export const removeRsvp = (rsvpId) => {
    return ({
        type: REMOVE_RSVP,
        rsvpId
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

export const createRsvp = (rsvp) => dispatch => {
    return (
        RsvpAPIUtil.createRsvp(rsvp).then((group) => dispatch(receiveGroup(group)))
    );
};

export const deleteRsvp = (rsvp) => dispatch => {
    return (
        RsvpAPIUtil.deleteRsvp(rsvp).then((rsvpId) => dispatch(removeRsvp(rsvpId)))
    );
};