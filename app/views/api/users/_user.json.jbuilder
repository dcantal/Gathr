# json.extract! user, :id, :email, :username


    json.extract! user, :id, :email, :username
    json.groups user.group_ids
    json.events user.event_ids
