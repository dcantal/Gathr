# Gathr

Gathr is a single page web-app clone of the popular groups and events listing site, Meetup. It uses a Ruby on Rails backend with a PostgreSQL database. The front end was developed using React / Redux.


![alt text](https://s3.amazonaws.com/gathr-dc-seeds/Screen+Shot+2019-04-05+at+11.25.36+AM.png "Gathr Splash Page")

## Features

### Users
Visitors to the site can create a new user account. Creating an account employs an authentication pattern that utilizes password encryption. Once a member, users can create profiles, groups, and events, features not available to non-member visitors.

### Groups
All visitors of the site can view groups but members of the site can start, join, and leave groups created by other users. On the backend, groups are joined to the users through a joins table that stores memberships. These memberships specify the user, the group, and the users status in the group (can be a member or an organizer). Groups can have multiple organizers. If a user is an organizer of the group, the groups page will reflect that and show a button on the picture to change the groups photo. Search functionality is not yet implemented.

![alt text](https://s3.amazonaws.com/gathr-dc-seeds/Screen+Shot+2019-04-05+at+11.31.57+AM.png "Groups Index")
![alt text](https://s3.amazonaws.com/gathr-dc-seeds/Screen+Shot+2019-04-05+at+11.36.53+AM.png "Groups Create")
![alt text](https://s3.amazonaws.com/gathr-dc-seeds/Screen+Shot+2019-04-05+at+11.33.31+AM.png "Group Show")
![alt text](https://s3.amazonaws.com/gathr-dc-seeds/Screen+Shot+2019-04-05+at+11.34.51+AM.png "Groups Change Photo")

### Events
Users are not yet able to make events but the feature is planned.
