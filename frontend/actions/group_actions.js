import * as APIUtil from '../util/group_api_util';
import * as MemberAPIUtil from '../util/membership_api_util';

export const RECEIVE_GROUPS = "RECEIVE_GROUPS";
export const RECEIVE_GROUP = "RECEIVE_GROUP";
export const REMOVE_GROUP = "REMOVE_GROUP";
export const RECEIVE_MEMBERSHIP = "RECEIVE_MEMBERSHIP";
export const RECEIVE_MEMBERS = "RECEIVE_MEMBERS";

export const receiveGroups = (groups) => {
    return ({
        type: RECEIVE_GROUPS,
        groups
    });
};

export const receiveGroup = ({group}) => {
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

export const receiveMembers = (members) => {
    return ({
        type: RECEIVE_MEMBERS,
        members
    });
};

// export const receiveMembership = ()

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

export const fetchMembers = (groupId) => dispatch => {
    return (
        APIUtil.fetchMembers(groupId).then((members) => dispatch(receiveMembers(members)))
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
        APIUtil.deleteGroup(groupId).then(() => dispatch(removeGroup(groupId)))
    );
};

export const createMembership = (membership) => dispatch => {
    return (
        MemberAPIUtil.createMembership(membership).then((group) => dispatch(receiveGroup(group)))
    );
};

export const deleteMembership = (membership) => dispatch => {
    return (
        MemberAPIUtil.deleteMembership(membership).then((group) => dispatch(receiveGroup(group)))
    );
};