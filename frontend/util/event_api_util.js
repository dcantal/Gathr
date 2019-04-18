export const fetchEvents = () => {
    return (
        $.ajax({
            method: 'GET',
            url: 'api/events',
        })
    );
};

export const fetchEvent = (id) => {
    return (
        $.ajax({
            method: 'GET',
            url: `api/events/${id}`,
        })
    );
};

export const createEvent = (event) => {
    return (
        $.ajax({
            method: 'POST',
            url: `api/groups/${event.groupId}/events`,
            data: {event},
        })
    );
};

export const updateEvent = (event) => {
    return (
        $.ajax({
            method: 'PATCH',
            url: `api/groups/${event.groupId}/events/${event.id}`,
            data: {event},
        })
    );
};