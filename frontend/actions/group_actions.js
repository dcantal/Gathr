import * as APIUtil from '../util/group_api_util';

export const RECEIVE_GROUPS = "RECEIVE_GROUPS";
export const RECEIVE_GROUP = "RECEIVE_GROUP";
export const REMOVE_GROUP = "REMOVE_GROUP";

export const receiveGroups = (groups) => {
    return ({
        type: RECEIVE_GROUPS,
        groups
    });
};

export const receiveGroup = (group) => {
    return ({
        type: RECEIVE_GROUP,
        group
    });
};

export const removeGroup = (groupId) => {
    return ({
        type: REMOVE_GROUP,
        groupId
    });
};

export const fetchGroups = () => dispatch => {
    return (
        APIUtil.fetchGroups().then((groups) => dispatch(receiveGroups(groups)))
    );
};

export const fetchGroup = (id) => dispatch => {
    return (
        APIUtil.fetchGroup(id).then((group) => dispatch(receiveGroup(group)))
    );
};

export const createGroup = (group) => dispatch => {
    return (
        APIUtil.createGroup(group).then((group) => dispatch(receiveGroup(group)))
    );
};

export const updateGroup = (group) => dispatch => {
    return (
        APIUtil.updateGroup(group).then((group) => dispatch(receiveGroup(group)))
    );
};

export const deleteGroup = groupId => dispatch => {
    return (
        APIUtil.deleteGroup(groupId).then((group) => dispatch(removeGroup(groupId)))
    );
};