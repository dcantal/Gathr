export const createRsvp = (rsvp) => {
    return (
        $.ajax({
            method: 'POST',
            url: `api/events/${rsvp.event_id}/rsvps`,
            data: { rsvp }
        })
    );
};

export const deleteRsvp = (rsvp) => {
    return (
        $.ajax({
            method: 'DELETE',
            url: `api/events/${rsvp.event_id}/rsvps/${rsvp.id}`,
        })
    )
}