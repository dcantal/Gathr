@events.each do |event|
    json.set! event.id do
        json.extract! event, :id, :group_id, :name, :description, :start_time, :end_time, :latitude, :longitude, :private
        json.photoUrl url_for(event.photo)
    end
end