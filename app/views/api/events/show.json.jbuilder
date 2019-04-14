json.event do
    json.extract! @event, :id, :group_id, :name, :description, :start_time, :end_time, :latitude, :longitude, :private
end