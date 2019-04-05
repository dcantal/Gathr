# Gathr

Gathr is a single page web-app clone of the popular groups and events listing site, Meetup. It uses a Ruby on Rails backend with a PostgreSQL database. The front end was developed using React / Redux.


![alt text](https://s3.amazonaws.com/gathr-dc-seeds/Screen+Shot+2019-04-05+at+11.39.33+AM.png "Gathr Splash Page")

## Features

### Users

* Visitors to the site can create a new user account which utilizes an authentication pattern and password encryption. 
* Members can create groups, a feature that is not available to non-member visitors.

### Groups

* All visitors can view an index of groups and a spefic group's details
![alt text](https://s3.amazonaws.com/gathr-dc-seeds/Screen+Shot+2019-04-05+at+11.31.57+AM.png "Groups Index")
![alt text](https://s3.amazonaws.com/gathr-dc-seeds/Screen+Shot+2019-04-05+at+11.33.31+AM.png "Group Show")
#
#
* Members can start, join, and leave groups
#
#
![alt text](https://s3.amazonaws.com/gathr-dc-seeds/Screen+Shot+2019-04-05+at+11.36.53+AM.png "Groups Create")
![alt text](https://s3.amazonaws.com/gathr-dc-seeds/Screen+Shot+2019-04-05+at+11.34.51+AM.png "Groups Change Photo")

## Technical Challenges

### Backend
On the backend, groups are joined to the users through a joins table that stores memberships. These memberships specify the user, the group, and the users status in the group (can be a member or an organizer). Groups can have multiple organizers. 

For me, implementing the joins table has been the most difficult part of the this project so far. Ensuring that components have access to the desired data requires many changes to the files, with most occuring in the backend. 
I took advantage of rails associations and ActiveRecord, in combination with jbuilder, to organize the state. 


## Work to be done

## Groups
* Autocomplete for setting a group's hometown powered by Google Maps API
* Editing more group details for Organizers
* Search functionality by location and name

### Events
Users are not yet able to make events but the feature is planned.

