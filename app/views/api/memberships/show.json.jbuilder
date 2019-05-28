
json.membership do
    json.extract! @membership, :id, :group_id, :user_id, :organizer
end