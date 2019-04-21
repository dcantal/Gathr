json.group do
    json.extract! @group, :id, :name, :hometown, :description, :member_count, :private
    json.member_count @group.member_count
    json.members @group.member_ids
    json.member_info do
        @group.members.each do |member|
            json.set! member.id do
                json.extract! member, :id, :username, :email
            end
        end
    end
    json.memberships do
        @group.memberships.each do |membership|
            json.set! membership.user_id do
                json.extract! membership, :id, :user_id, :group_id, :organizer
            end
        end
    end
    json.organizers @group.organizers
    json.organizer_info do
        @group.organizer_memberships.each do |membership|
            json.set! membership.user_id do
                json.extract! membership.member, :id, :username, :email
            end
        end
    end
    json.photoUrl url_for(@group.photo)
    json.events do
        @group.events.each do |event|
            json.set! event.id do
                json.extract! event, :id, :name, :description, :start_time, :end_time, :latitude, :longitude
            end
        end
    end
end

json.members do
    @group.members.each do |member|
        json.set! member.id do
            json.extract! member, :id, :username, :email
        end
    end
end