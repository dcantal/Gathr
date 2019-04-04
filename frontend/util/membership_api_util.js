export const createMembership = (membership) => {
    debugger
    return (
        $.ajax({
            method: 'POST',
            url: `api/groups/${membership.group_id}/memberships`,
            data: { membership }
        })
    );
};

export const deleteMembership = (membership) => {
    return (
        $.ajax({
            method: 'DELETE',
            url: `api/groups/${membership.group_id}/memberships/${membership.id}`,
        })
    );
};
