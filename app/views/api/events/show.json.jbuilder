json.event do
    json.extract! @event, :id, :group_id, :name, :description, :start_time, :end_time, :latitude, :longitude, :private
    json.photoUrl url_for(@event.photo)
    json.group do 
        json.extract! @event.group, :id, :name
        json.photoUrl url_for(@event.group.photo)
    end
end