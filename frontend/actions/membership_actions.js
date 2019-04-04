import * as APIUtil from '../util/membership_api_util';
import { receiveGroup } from './group_actions';

export const RECEIVE_MEMBERSHIP = "RECEIVE_MEMBERSHIP";
export const REMOVE_MEMBERSHIP = "REMOVE_MEMBERSHIP";

const receiveMembership = (group) => {
    return ({
        type: RECEIVE_MEMBERSHIP,
        group
    });
};

const removeMembership = (membershipId) => {
    return ({
        type: REMOVE_MEMBERSHIP,
        membershipId
    });
};

export const createMembership = (membership) => dispatch => {
    return (
        APIUtil.createMembership(membership).then((group) => dispatch(receiveGroup(group)))
    );
};

export const deleteMembership = (membershipId) => dispatch => {
    return (
        APIUtil.deleteMembership(membershipId).then((membershipId) => dispatch(removeMembership(membershipId)))
    );
};