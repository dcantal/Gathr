@groups.each do |group|
    json.set! group.id do
        json.extract! group, :id, :name, :hometown, :description, :private
        # json.memberships group.memberships.map{member} member.user_id
        json.member_count group.member_count
    end
end