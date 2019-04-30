json.event do
    json.extract! @event, :id, :group_id, :name, :description, :start_time, :end_time, :latitude, :longitude, :address, :private
    json.attendee_count @event.attendee_count
    json.photoUrl url_for(@event.photo)
    json.group do 
        json.extract! @event.group, :id, :name
        json.photoUrl url_for(@event.group.photo)
    end
    json.attendees @event.attendee_ids
    json.attendee_info do
        @event.attendees.each do |attendee|
            json.set! attendee.id do
                json.extract! attendee, :id, :username, :email
            end
        end
    end
    json.rsvps do
        @event.rsvps.each do |rsvp|
            json.set! rsvp.user_id do
                json.extract! rsvp, :id, :user_id, :event_id, :organizer
            end
        end
    end
    json.organizers @event.organizers
    json.organizer_info do
        @event.organizer_rsvps.each do |rsvp|
            json.set! rsvp.user_id do
                json.extract! rsvp.attendee, :id, :username, :email
            end
        end
    end
end