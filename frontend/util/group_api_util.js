// export const fetchGroups = (data) => {
//     return (
//         $.ajax({
//             method: 'GET',
//             url: 'api/groups',
//             data
//         })
//     );
// };

export const fetchGroups = () => {
    return (
        $.ajax({
            method: 'GET',
            url: 'api/groups',
        })
    );
};

export const fetchGroup = (id) => {
    debugger
    return (
        $.ajax({
            method: 'GET',
            url: `api/groups/${id}`
        })
    );
};

export const createGroup = (group) => {
    debugger
    return (
        $.ajax({
            method: 'POST',
            url: 'api/groups',
            data: {group}
        })
    );
};

export const updateGroup = (group) => {
    return (
        $.ajax({
            method: 'PATCH',
            url: `api/groups/${group.id}`,
            data: {group}
        })
    );
};

export const deleteGroup = id => {
    return (
        $.ajax({
            method: 'DELETE',
            url: `api/groups/${id}`
        })
    );
};

// export const createMembership = membership => {
//     return (
//         $.ajax({
//             method: 'POST',
//             url: 'api/memberships',
//             data: { membership }
//         })
//     );
// };

export const fetchMembers = (groupId) => {
    debugger
    return (
        $.ajax({
            method: 'GET',
            url: `api/${groupId}/members`,
            data: { groupId }
        })
    );
};