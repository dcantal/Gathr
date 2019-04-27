json.user do
    json.partial! "api/users/user", user: @user
    json.groups @user.group_ids
    json.events @user.event_ids
end