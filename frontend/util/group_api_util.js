export const fetchGroups = (data) => {
    return (
        $.ajax({
            method: 'GET',
            url: 'api/groups',
            data
        })
    );
};

export const fetchGroup = (id) => {
    return (
        $.ajax({
            method: 'GET',
            url: `api/groups/${id}`
        })
    );
};

export const createGroup = (groupForm) => {
    return (
        $.ajax({
            method: 'POST',
            url: 'api/groups',
            data: {groupForm}
        })
    );
};

export const updateGroup = (groupForm) => {
    return (
        $.ajax({
            method: 'PATCH',
            url: `api/groups/${groupForm.id}`,
            data: {groupForm}
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

