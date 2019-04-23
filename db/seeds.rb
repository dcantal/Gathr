# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'


Membership.destroy_all
Rsvp.destroy_all
User.destroy_all
Group.destroy_all
Event.destroy_all

Rin = User.create(username: "Rina Ruvolo", email: "Rin@gmail.com", password: "testtest")
Che = User.create(username: "Cheryll Deegan", email: "Che@gmail.com", password: "testtest")
Mil = User.create(username: "Milford Zeigler", email: "Mil@gmail.com", password: "testtest")
Nik = User.create(username: "Nikia Tomita", email: "Nik@gmail.com", password: "testtest")
Ger = User.create(username: "Gerri Franks", email: "Ger@gmail.com", password: "testtest")
She = User.create(username: "Sherril Moore", email: "She@gmail.com", password: "testtest")
Ber = User.create(username: "Bert Mudd", email: "Ber@gmail.com", password: "testtest")
Oli = User.create(username: "Olin Sims", email: "Oli@gmail.com", password: "testtest")
Aza = User.create(username: "Azalee Wendt", email: "Aza@gmail.com", password: "testtest")
Erm = User.create(username: "Erma Cozad", email: "Erm@gmail.com", password: "testtest")
Myr = User.create(username: "Myrtis Rohde", email: "Myr@gmail.com", password: "testtest")
Ewa = User.create(username: "Ewa Childs", email: "Ewa@gmail.com", password: "testtest")
Tom = User.create(username: "Tomas Halladay", email: "Tom@gmail.com", password: "testtest")
Der = User.create(username: "Derrick Papazian", email: "Der@gmail.com", password: "testtest")
Suk = User.create(username: "Suk Chiasson", email: "Suk@gmail.com", password: "testtest")
Vad = User.create(username: "Vada Mcglothin", email: "Vad@gmail.com", password: "testtest")
Sus = User.create(username: "Susanne Policastro", email: "Sus@gmail.com", password: "testtest")
Don = User.create(username: "Donella Birchard", email: "Don@gmail.com", password: "testtest")
Ine = User.create(username: "Ines Pacheo", email: "Ine@gmail.com", password: "testtest")
Marc = User.create(username: "Marco Greenhalgh", email: "Mar@gmail.com", password: "testtest")
Fe = User.create(username: "Fe Fairall", email: "Fe@gmail.com", password: "testtest")
Sol = User.create(username: "Soledad Artist", email: "Sol@gmail.com", password: "testtest")
Joi = User.create(username: "Joi Pickell", email: "Joi@gmail.com", password: "testtest")
Myra = User.create(username: "Myra Friedlander", email: "Myr@gmail.com", password: "testtest")
Taw = User.create(username: "Tawny Willmore", email: "Taw@gmail.com", password: "testtest")
Mar = User.create(username: "Margrett Gupton", email: "Mar@gmail.com", password: "testtest")
Ant = User.create(username: "Antone Courtney", email: "Ant@gmail.com", password: "testtest")
Sof = User.create(username: "Sofia Blea", email: "Sof@gmail.com", password: "testtest")
Ved = User.create(username: "Veda Ensor", email: "Ved@gmail.com", password: "testtest")
Dea = User.create(username: "Deanne Lomas", email: "Dea@gmail.com", password: "testtest")
Dan = User.create(username: "Dante Cantal", email: "danteacantal@gmail.com", password: "testtest")


rft = Group.create(name: "Really Fun Things To Do In New York City", hometown: "New York City, NY, USA", description: "We plan and attend really fun things to do in NYC. Everything from wine tasting to paint nights... dancing to karaoke! So join us to meet new people and have a great time. We try to provide a fun, easy going environment where you can be yourself. So bring your best positive attitude and join us at our upcoming events. We will be attending free events and also paid events (most costing less than $20). We'll be attending Broadway Plays, fun holiday themed events, social painting nights and more.")
nytm = Group.create(name: "New York Tech Meetup", hometown: "New York City, NY, USA", description: "About NY Tech Meetup

Founded in 2004, NY Tech Meetup is the largest meetup group in the world. It is run by NY Tech Alliance, a non-profit organization formed by the merger of NY Tech Meetup (the non-profit) and New York Tech Council in 2016.

Each month, our monthly meetup is held at different venues across New York City, and features live demos from New York tech companies, followed by an after party.

About NY Tech Alliance

The mission of the NY Tech Alliance is to represent, inspire, support, and help lead the New York technology community and ecosystem to create a better future for all. Founded in 2016 with the merger of NY Tech Meetup and the New York Technology Council, the organization has over 60,000 individual and institutional members, reflecting the full spectrum of the greater New York area tech community and making it the largest tech organization in the region. Led by Executive Director Andy Saldaña with Acting Chair Thatcher Bell, the NY Tech Alliance continues the work of its predecessor organizations, hosts a monthly Meetup as well as educational and social events, and continues to focus programming and advocacy efforts on issues important to the technology sector and New York.")

wwc = Group.create(name: "Women Who Code NYC", hometown: "New York City, NY, USA", description: "Women Who Code is the largest and most active community of engineers dedicated to inspiring women to excel in technology careers. We envision a world where women are representative as technical executives, founders, VCs, board members, and software engineers. Our programs are designed to get you there.

Who should join?

Our community is for professional women and allies of women in technology careers, including software engineers, developers, UX/UI designers, data scientists and more. Current and aspiring coders are welcome. Bring your laptop and a friend!")

shy = Group.create(name: "Shyness and Social Anxiety Meetup Group", hometown: "New York City, NY, USA", description: "Meet with other local people who suffer from shyness or social anxiety. Offer support and understanding and share your story with others. Learn and practice the skills it takes to over come your challenges not just with society but all so yourself. Have fun with nonjudgementel people in a relax setting. Our meet ups are to help people make friends, practice social skills, and have fun while doing both.")

game = Group.create(name: "New York Games Gathring", hometown: "New York City, NY, USA", description: "If you like playing games and live in New York, then come play games and live in New York with us!")
fire = Group.create(name: "Bonfire and Red Cup fans", hometown: "New York City, NY, USA", description: "Fans of sitting around a bonfire drinking from red cups.

No heaters or blue cups allowed.")

camel = Group.create(name: "Camelriders of Brooklyn", hometown: "New York City, NY, USA", description: "Anyone who loves camelriding in Brooklyn should join. We haven't done it or seen anyone do it but we're determined to be the first")

filerft = open('https://s3.amazonaws.com/gathr-dc-seeds/rft.jpeg')
filenytm = open('https://s3.amazonaws.com/gathr-dc-seeds/nytm.jpeg')
filewwc = open('https://s3.amazonaws.com/gathr-dc-seeds/wwc.jpeg')
fileshy = open('https://s3.amazonaws.com/gathr-dc-seeds/shy.jpg')
filegame = open('https://s3.amazonaws.com/gathr-dc-seeds/gaming.jpg')
filefire = open('https://s3.amazonaws.com/gathr-dc-seeds/bonfire.jpg')
filecamel = open('https://s3.amazonaws.com/gathr-dc-seeds/camelriding.jpg')

rft.photo.attach(io: filerft, filename: 'rft.jpeg')
nytm.photo.attach(io: filenytm, filename: 'nytm.jpeg')
wwc.photo.attach(io: filewwc, filename: 'wwc.jpeg')
shy.photo.attach(io: fileshy, filename: 'shy.jpg')
game.photo.attach(io: filegame, filename: 'gaming.jpg')
fire.photo.attach(io: filefire, filename: 'bonfire.jpg')
camel.photo.attach(io: filecamel, filename: 'camelriding.jpg')

Membership.create(user_id: Rin.id, group_id: rft.id, organizer: true)
Membership.create(user_id: Che.id, group_id: rft.id, organizer: false)
Membership.create(user_id: Mil.id, group_id: rft.id, organizer: false)
Membership.create(user_id: Nik.id, group_id: rft.id, organizer: false)
Membership.create(user_id: Ger.id, group_id: rft.id, organizer: false)
Membership.create(user_id: She.id, group_id: rft.id, organizer: false)
Membership.create(user_id: Ber.id, group_id: rft.id, organizer: false)
Membership.create(user_id: Oli.id, group_id: rft.id, organizer: false)
Membership.create(user_id: Aza.id, group_id: nytm.id, organizer: true)
Membership.create(user_id: Erm.id, group_id: nytm.id, organizer: false)
Membership.create(user_id: Myr.id, group_id: nytm.id, organizer: false)
Membership.create(user_id: Ewa.id, group_id: nytm.id, organizer: false)
Membership.create(user_id: Tom.id, group_id: nytm.id, organizer: false)
Membership.create(user_id: Der.id, group_id: nytm.id, organizer: false)
Membership.create(user_id: Suk.id, group_id: nytm.id, organizer: false)
Membership.create(user_id: Vad.id, group_id: nytm.id, organizer: false)
Membership.create(user_id: Sus.id, group_id: nytm.id, organizer: false)
Membership.create(user_id: Don.id, group_id: nytm.id, organizer: false)
Membership.create(user_id: Ine.id, group_id: nytm.id, organizer: false)
Membership.create(user_id: Mar.id, group_id: nytm.id, organizer: false)
Membership.create(user_id: Fe.id, group_id: wwc.id, organizer: true)
Membership.create(user_id: Sol.id, group_id: wwc.id, organizer: false)
Membership.create(user_id: Joi.id, group_id: wwc.id, organizer: false)
Membership.create(user_id: Myr.id, group_id: wwc.id, organizer: false)
Membership.create(user_id: Taw.id, group_id: wwc.id, organizer: false)
Membership.create(user_id: Mar.id, group_id: wwc.id, organizer: false)
Membership.create(user_id: Ant.id, group_id: wwc.id, organizer: false)
Membership.create(user_id: Sof.id, group_id: wwc.id, organizer: false)
Membership.create(user_id: Ved.id, group_id: wwc.id, organizer: false)
Membership.create(user_id: Dea.id, group_id: wwc.id, organizer: false)
Membership.create(user_id: Dan.id, group_id: shy.id, organizer: true)
Membership.create(user_id: Ger.id, group_id: shy.id, organizer: false)
Membership.create(user_id: She.id, group_id: shy.id, organizer: false)
Membership.create(user_id: Ber.id, group_id: shy.id, organizer: false)
Membership.create(user_id: Oli.id, group_id: shy.id, organizer: false)
Membership.create(user_id: Aza.id, group_id: shy.id, organizer: false)
Membership.create(user_id: Rin.id, group_id: game.id, organizer: true)
Membership.create(user_id: Ger.id, group_id: game.id, organizer: false)
Membership.create(user_id: Suk.id, group_id: game.id, organizer: false)
Membership.create(user_id: Don.id, group_id: game.id, organizer: false)
Membership.create(user_id: Fe.id, group_id: game.id, organizer: false)
Membership.create(user_id: Myr.id, group_id: game.id, organizer: false)
Membership.create(user_id: Ved.id, group_id: game.id, organizer: false)
Membership.create(user_id: Nik.id, group_id: fire.id, organizer: true)
Membership.create(user_id: She.id, group_id: fire.id, organizer: false)
Membership.create(user_id: Ewa.id, group_id: fire.id, organizer: false)
Membership.create(user_id: Vad.id, group_id: fire.id, organizer: false)
Membership.create(user_id: Mar.id, group_id: fire.id, organizer: false)
Membership.create(user_id: Mar.id, group_id: fire.id, organizer: false)
Membership.create(user_id: Dea.id, group_id: fire.id, organizer: false)
Membership.create(user_id: Dan.id, group_id: fire.id, organizer: false)
Membership.create(user_id: Rin.id, group_id: camel.id, organizer: false)
Membership.create(user_id: Che.id, group_id: camel.id, organizer: false)
Membership.create(user_id: She.id, group_id: camel.id, organizer: false)
Membership.create(user_id: Ber.id, group_id: camel.id, organizer: false)
Membership.create(user_id: Myr.id, group_id: camel.id, organizer: false)
Membership.create(user_id: Suk.id, group_id: camel.id, organizer: false)
Membership.create(user_id: Mar.id, group_id: camel.id, organizer: false)
Membership.create(user_id: Sol.id, group_id: camel.id, organizer: false)
Membership.create(user_id: Taw.id, group_id: camel.id, organizer: false)
Membership.create(user_id: Sof.id, group_id: camel.id, organizer: false)
Membership.create(user_id: Dea.id, group_id: camel.id, organizer: false)
Membership.create(user_id: Dan.id, group_id: camel.id, organizer: true)

grandcentral = Event.create(name: "Grand Central Scavenger & History Hunt", description: "Kick off your weekend with dozens of Meetup members for a fun Happy Hour with a twist! The Great Northern Food hall at Grand Central is a relatively new addition to the iconic building located on the street level that features 2 bars and several food stands. Join us for Happy Hour cocktails then set out into Grand Central for a fun scavenger hunt where you will learn the history of the building and discover many things you may never have noticed.

How many times have you walked through Grand Central and actually taken time to really appreciate how beautiful it is? With this Scavenger Hunt you will not only get to appreciate one of New York's most iconic buildings, but you will get to meet dozens of new friends in a fun and casual way. Come alone or with a friend and we will team you up with others attending.

Each team will have 75 minutes to complete the scavenger hunt with a list of questions, challenges, and puzzles. The teams with the most points will win prizes. Level? No prior knowledge needed of anything… just have fun.", group_id: rft.id, start_time: DateTime.new(2019,5,3,20,0,0,Rational(-4,24)), end_time: DateTime.new(2019,5,3,22,0,0,Rational(-4,24)), latitude: 40.750935, longitude: -73.977104, private: FALSE)

speedfriend = Event.create(name: "Speed FRIENDING (40s & Over)", description: "If you are in your 40s or over, looking to expand your social circle and make new friends/activity partners, then this Meetup is for you!

HOW IT WORKS:

1. We will break attendees up into groups of 2-4 people and provide some ice-breakers get to know you questions.

2. The group will stay together for about 5-10 minutes and at the end of the round, half of the participants will move to a new station and start a new round, meeting new people.

FAQs:

How many will attend? This is a MULTI-GROUP partner Meetup. Don't go by the RSVPs you see in this group alone. We will have a good number of members attending.

Can I come alone? Yes. 95% of those attending will be coming on their own. This is a great way to network, connect and make new friends!

Is this age-specific? Yes, this is a special edition of our Speed Friending intended for 40s, 50s +", group_id: rft.id, start_time: DateTime.new(2019,5,4,20,0,0,Rational(-4,24)), end_time: DateTime.new(2019,5,4,23,0,0,Rational(-4,24)), latitude: 40.752865, longitude: -73.98599, private: FALSE)

murdermystery = Event.create(name: "Murder Mystery Mixer - Everyone is a suspect!", description: "Our Murder Mystery Parties have become an awesome alternative to the usual bar scene. It is a great way to go out on your own with friends or on your own and meet other people in a super organized and fun way! We will also have great drink specials!

Join us for this Murder Mystery Theme Party where everyone at the party is a suspect and you will help to find the killer!! Everyone at our party will have a character to play, no experience necessary and it is so much fun!

Pre-Mingle starts at 7:30. We will start to put together teams at 8pm. Everyone will be given a character sheet explaining who they are and who they fit into the story.

The Theme:

For weeks, people have been pouring into the small western town of Deadwood for the biggest poker tournament this side of the Mississippi. From outlaws to marshals and saloon girls to southern belles, everyone has made this small western frontier town THE place to be. As the festivities of the poker tournament conclude, a celebration party is planned at the Deadwood Saloon to award the prize money for the tournament and to celebrate what is hoping to be a very financially successful venture for the saloon.", group_id: rft.id, start_time: DateTime.new(2019,5,11,20,0,0,Rational(-4,24)), end_time: DateTime.new(2019,5,11,23,0,0,Rational(-4,24)), latitude: 40.7525175, longitude: -73.969879, private: FALSE)

springyacht = Event.create(name: "Spring Yacht Party Cruise (DJ, Comp Appetizers, Ice Breakers, Prizes)", description: "Members keep asking when are we doing the Yacht Cruise Meetup again... well, here it is! Join 200+ singles (ages 20s-40s) from multiple groups & set sail around Manhattan for a 4 hour private tour & party!

Mix, mingle, drink & dance the night away with a panoramic view of the NYC skyline, Statue Of Liberty, Brooklyn Bridge, Freedom Tower etc. on a 100 ft, 2-deck private yacht.

This is a multi-Meetup and very popular event! It will SELL OUT so if you'd like to attend, please get your ticket ASAP.", group_id: rft.id, start_time: DateTime.new(2019,5,12,20,0,0,Rational(-4,24)), end_time: DateTime.new(2019,5,12,23,0,0,Rational(-4,24)), latitude: 40.73804, longitude: -73.973656, private: FALSE)

machinelearning = Event.create(name: "Machine learning: Trends, perspectives, and prospects @ Attune", description: "Come and learn for an exciting talk about Machine Learning! This exciting space will only grow bigger in the future and you should definitely add this knowledge to your repertoire ", group_id: wwc.id, start_time: DateTime.new(2019,5,3,20,0,0,Rational(-4,24)), end_time: DateTime.new(2019,5,3,22,0,0,Rational(-4,24)), latitude: 40.7057883, longitude: -74.0102498, private: FALSE)

algorithms = Event.create(name: "Algorithms@Betterment", description: "Come for some algorithms practice ", group_id: wwc.id, start_time: DateTime.new(2019,5,10,20,0,0,Rational(-4,24)), end_time: DateTime.new(2019,5,10,22,0,0,Rational(-4,24)), latitude: 40.7426416, longitude: -73.9939997, private: FALSE)

maynytech = Event.create(name: "May 2019 NY Tech Meetup", description: "Join us for one of NYC's most famous and longest running monthly tech event! You'll see a fantastic lineup of New York tech companies presenting live demos of their products, followed by an afterparty where you can network with the community and meet our demoers and sponsors.

This month, we are going farm to table with a great lineup of Food/ Agriculture/ Restaurant tech! Stay tuned for the full list of companies.", group_id: nytm.id, start_time: DateTime.new(2019,5,17,20,0,0,Rational(-4,24)), end_time: DateTime.new(2019,5,17,22,0,0,Rational(-4,24)), latitude: 40.741898, longitude: -73.99055, private: FALSE)

junenytech = Event.create(name: "June 2019 NY Tech Meetup", description: "Join us for one of NYC's most famous and longest running monthly tech event! You'll see a fantastic lineup of New York tech companies presenting live demos of their products, followed by an afterparty where you can network with the community and meet our demoers and sponsors.", group_id: nytm.id, start_time: DateTime.new(2019,6,17,20,0,0,Rational(-4,24)), end_time: DateTime.new(2019,6,17,22,0,0,Rational(-4,24)), latitude: 40.741898, longitude: -73.99055, private: FALSE)

thirdsocial = Event.create(name: "Third social gathering", description: "This will be the third social get together to discuss games over drinks. The poll was pretty conclusive that Barcade is the favored spot. I’ll leave the poll up, for those who want to suggest other places. I’m going to see if we get any more RSVPs tomorrow, but if not, will prob postpone - this might be a bad week, as I understand some might be on spring break and Wednesday’s may not work well.", group_id: game.id, start_time: DateTime.new(2019,5,3,20,0,0,Rational(-4,24)), end_time: DateTime.new(2019,5,3,22,0,0,Rational(-4,24)), latitude: 40.7443119, longitude: -73.9944248, private: FALSE)

fourthsocial = Event.create(name: "Fourth social gathering", description: "This will be the fourth social get together to discuss games over drinks. The poll was pretty conclusive that Barcade is the favored spot. I’ll leave the poll up, for those who want to suggest other places. I’m going to see if we get any more RSVPs tomorrow, but if not, will prob postpone - this might be a bad week, as I understand some might be on spring break and Wednesday’s may not work well.", group_id: game.id, start_time: DateTime.new(2019,5,10,20,0,0,Rational(-4,24)), end_time: DateTime.new(2019,5,10,22,0,0,Rational(-4,24)), latitude: 40.7443119, longitude: -73.9944248, private: FALSE)

filegrandcentral = open('https://s3.amazonaws.com/gathr-dc-seeds/grandcentral.jpeg')
filespeedfriend = open('https://s3.amazonaws.com/gathr-dc-seeds/speedfriend.jpeg')
filemurdermystery = open('https://s3.amazonaws.com/gathr-dc-seeds/murdermystery.jpeg')
filespringyacht = open('https://s3.amazonaws.com/gathr-dc-seeds/springyahct.jpeg')
filemachinelearning = open('https://s3.amazonaws.com/gathr-dc-seeds/machinelearning.jpeg')
filealgorithms = open('https://s3.amazonaws.com/gathr-dc-seeds/algorithms.jpg')
filemaynytech = open('https://s3.amazonaws.com/gathr-dc-seeds/mayny.jpeg')
filejunenytech = open('https://s3.amazonaws.com/gathr-dc-seeds/juneny.jpeg')
filethirdsocial = open('https://s3.amazonaws.com/gathr-dc-seeds/gamingpc.jpg')
filefourthsocial = open('https://s3.amazonaws.com/gathr-dc-seeds/marioandluigi.jpeg')

grandcentral.photo.attach(io: filegrandcentral, filename: 'grandcentral.jpeg')
speedfriend.photo.attach(io: filespeedfriend, filename: 'speedfriend.jpeg')
murdermystery.photo.attach(io: filemurdermystery, filename: 'murdermystery.jpeg')
springyacht.photo.attach(io: filespringyacht, filename: 'springyahct.jpeg')
machinelearning.photo.attach(io: filemachinelearning, filename: 'machinelearning.jpeg')
algorithms.photo.attach(io: filealgorithms, filename: 'algorithms.jpg')
maynytech.photo.attach(io: filemaynytech, filename: 'mayny.jpeg')
junenytech.photo.attach(io: filejunenytech, filename: 'juneny.jpeg')
thirdsocial.photo.attach(io: filethirdsocial, filename: 'gamingpc.jpg')
fourthsocial.photo.attach(io: filefourthsocial, filename: 'marioandluigi.jpeg')

Rsvp.create(user_id: Dea.id, event_id: algorithms.id, organizer: TRUE)
Rsvp.create(user_id: Mar.id, event_id: algorithms.id, organizer: FALSE)
Rsvp.create(user_id: She.id, event_id: algorithms.id, organizer: FALSE)
Rsvp.create(user_id: Sof.id, event_id: algorithms.id, organizer: FALSE)
Rsvp.create(user_id: Taw.id, event_id: algorithms.id, organizer: FALSE)
Rsvp.create(user_id: Ved.id, event_id: algorithms.id, organizer: FALSE)
Rsvp.create(user_id: Ber.id, event_id: fourthsocial.id, organizer: FALSE)
Rsvp.create(user_id: Che.id, event_id: fourthsocial.id, organizer: FALSE)
Rsvp.create(user_id: Dan.id, event_id: fourthsocial.id, organizer: TRUE)
Rsvp.create(user_id: Dea.id, event_id: fourthsocial.id, organizer: FALSE)
Rsvp.create(user_id: Erm.id, event_id: fourthsocial.id, organizer: FALSE)
Rsvp.create(user_id: Ewa.id, event_id: fourthsocial.id, organizer: FALSE)
Rsvp.create(user_id: Fe.id, event_id: fourthsocial.id, organizer: FALSE)
Rsvp.create(user_id: Sol.id, event_id: fourthsocial.id, organizer: FALSE)
Rsvp.create(user_id: Suk.id, event_id: fourthsocial.id, organizer: FALSE)
Rsvp.create(user_id: Sus.id, event_id: fourthsocial.id, organizer: FALSE)
Rsvp.create(user_id: Tom.id, event_id: fourthsocial.id, organizer: FALSE)
Rsvp.create(user_id: Vad.id, event_id: fourthsocial.id, organizer: FALSE)
Rsvp.create(user_id: Aza.id, event_id: grandcentral.id, organizer: FALSE)
Rsvp.create(user_id: Dan.id, event_id: grandcentral.id, organizer: FALSE)
Rsvp.create(user_id: Fe.id, event_id: grandcentral.id, organizer: FALSE)
Rsvp.create(user_id: Ger.id, event_id: grandcentral.id, organizer: FALSE)
Rsvp.create(user_id: Joi.id, event_id: grandcentral.id, organizer: FALSE)
Rsvp.create(user_id: Mar.id, event_id: grandcentral.id, organizer: TRUE)
Rsvp.create(user_id: Myr.id, event_id: grandcentral.id, organizer: FALSE)
Rsvp.create(user_id: Oli.id, event_id: grandcentral.id, organizer: FALSE)
Rsvp.create(user_id: Rin.id, event_id: grandcentral.id, organizer: FALSE)
Rsvp.create(user_id: Sof.id, event_id: grandcentral.id, organizer: FALSE)
Rsvp.create(user_id: Sus.id, event_id: grandcentral.id, organizer: FALSE)
Rsvp.create(user_id: Ant.id, event_id: junenytech.id, organizer: FALSE)
Rsvp.create(user_id: Aza.id, event_id: junenytech.id, organizer: FALSE)
Rsvp.create(user_id: Der.id, event_id: junenytech.id, organizer: FALSE)
Rsvp.create(user_id: Ger.id, event_id: junenytech.id, organizer: FALSE)
Rsvp.create(user_id: Ine.id, event_id: junenytech.id, organizer: FALSE)
Rsvp.create(user_id: Joi.id, event_id: junenytech.id, organizer: TRUE)
Rsvp.create(user_id: Marc.id, event_id: junenytech.id, organizer: FALSE)
Rsvp.create(user_id: Myr.id, event_id: junenytech.id, organizer: FALSE)
Rsvp.create(user_id: Myra.id, event_id: junenytech.id, organizer: FALSE)
Rsvp.create(user_id: Nik.id, event_id: junenytech.id, organizer: FALSE)
Rsvp.create(user_id: Don.id, event_id: machinelearning.id, organizer: FALSE)
Rsvp.create(user_id: Nik.id, event_id: machinelearning.id, organizer: FALSE)
Rsvp.create(user_id: She.id, event_id: machinelearning.id, organizer: FALSE)
Rsvp.create(user_id: Sus.id, event_id: machinelearning.id, organizer: FALSE)
Rsvp.create(user_id: Ant.id, event_id: maynytech.id, organizer: FALSE)
Rsvp.create(user_id: Aza.id, event_id: maynytech.id, organizer: FALSE)
Rsvp.create(user_id: Don.id, event_id: maynytech.id, organizer: TRUE)
Rsvp.create(user_id: Ewa.id, event_id: maynytech.id, organizer: FALSE)
Rsvp.create(user_id: Fe.id, event_id: maynytech.id, organizer: FALSE)
Rsvp.create(user_id: Ger.id, event_id: maynytech.id, organizer: FALSE)
Rsvp.create(user_id: Mil.id, event_id: maynytech.id, organizer: FALSE)
Rsvp.create(user_id: Oli.id, event_id: maynytech.id, organizer: FALSE)
Rsvp.create(user_id: Vad.id, event_id: maynytech.id, organizer: TRUE)
Rsvp.create(user_id: Ved.id, event_id: maynytech.id, organizer: FALSE)
Rsvp.create(user_id: Ber.id, event_id: murdermystery.id, organizer: FALSE)
Rsvp.create(user_id: Che.id, event_id: murdermystery.id, organizer: FALSE)
Rsvp.create(user_id: Der.id, event_id: murdermystery.id, organizer: FALSE)
Rsvp.create(user_id: Ewa.id, event_id: murdermystery.id, organizer: FALSE)
Rsvp.create(user_id: Marc.id, event_id: murdermystery.id, organizer: FALSE)
Rsvp.create(user_id: Sol.id, event_id: murdermystery.id, organizer: FALSE)
Rsvp.create(user_id: Suk.id, event_id: murdermystery.id, organizer: FALSE)
Rsvp.create(user_id: Taw.id, event_id: murdermystery.id, organizer: FALSE)
Rsvp.create(user_id: Ant.id, event_id: speedfriend.id, organizer: FALSE)
Rsvp.create(user_id: Dea.id, event_id: speedfriend.id, organizer: TRUE)
Rsvp.create(user_id: Der.id, event_id: speedfriend.id, organizer: FALSE)
Rsvp.create(user_id: Don.id, event_id: speedfriend.id, organizer: FALSE)
Rsvp.create(user_id: Erm.id, event_id: speedfriend.id, organizer: FALSE)
Rsvp.create(user_id: Ine.id, event_id: speedfriend.id, organizer: FALSE)
Rsvp.create(user_id: Myr.id, event_id: speedfriend.id, organizer: FALSE)
Rsvp.create(user_id: Myra.id, event_id: speedfriend.id, organizer: FALSE)
Rsvp.create(user_id: Nik.id, event_id: speedfriend.id, organizer: FALSE)
Rsvp.create(user_id: Rin.id, event_id: speedfriend.id, organizer: FALSE)
Rsvp.create(user_id: She.id, event_id: speedfriend.id, organizer: FALSE)
Rsvp.create(user_id: Tom.id, event_id: speedfriend.id, organizer: FALSE)
Rsvp.create(user_id: Vad.id, event_id: speedfriend.id, organizer: TRUE)
Rsvp.create(user_id: Ved.id, event_id: speedfriend.id, organizer: FALSE)
Rsvp.create(user_id: Ber.id, event_id: springyacht.id, organizer: FALSE)
Rsvp.create(user_id: Che.id, event_id: springyacht.id, organizer: FALSE)
Rsvp.create(user_id: Dan.id, event_id: springyacht.id, organizer: FALSE)
Rsvp.create(user_id: Erm.id, event_id: springyacht.id, organizer: FALSE)
Rsvp.create(user_id: Ine.id, event_id: springyacht.id, organizer: FALSE)
Rsvp.create(user_id: Joi.id, event_id: springyacht.id, organizer: FALSE)
Rsvp.create(user_id: Mil.id, event_id: springyacht.id, organizer: FALSE)
Rsvp.create(user_id: Oli.id, event_id: springyacht.id, organizer: TRUE)
Rsvp.create(user_id: Rin.id, event_id: springyacht.id, organizer: FALSE)
Rsvp.create(user_id: Sol.id, event_id: springyacht.id, organizer: FALSE)
Rsvp.create(user_id: Suk.id, event_id: springyacht.id, organizer: FALSE)
Rsvp.create(user_id: Taw.id, event_id: springyacht.id, organizer: FALSE)
Rsvp.create(user_id: Tom.id, event_id: springyacht.id, organizer: FALSE)
Rsvp.create(user_id: Mar.id, event_id: thirdsocial.id, organizer: FALSE)
Rsvp.create(user_id: Mar.id, event_id: thirdsocial.id, organizer: FALSE)
Rsvp.create(user_id: Mil.id, event_id: thirdsocial.id, organizer: FALSE)
Rsvp.create(user_id: Myr.id, event_id: thirdsocial.id, organizer: FALSE)
Rsvp.create(user_id: Sof.id, event_id: thirdsocial.id, organizer: FALSE)
Rsvp.create(user_id: Dan.id, event_id: thirdsocial.id, organizer: TRUE)




# Rin = User.create(username: "Rina Ruvolo", email: "Rin@gmail.com", password: "testtest")
# Che = User.create(username: "Cheryll Deegan", email: "Che@gmail.com", password: "testtest")
# Mil = User.create(username: "Milford Zeigler", email: "Mil@gmail.com", password: "testtest")
# Nik = User.create(username: "Nikia Tomita", email: "Nik@gmail.com", password: "testtest")
# Ger = User.create(username: "Gerri Franks", email: "Ger@gmail.com", password: "testtest")
# She = User.create(username: "Sherril Moore", email: "She@gmail.com", password: "testtest")
# Ber = User.create(username: "Bert Mudd", email: "Ber@gmail.com", password: "testtest")
# Oli = User.create(username: "Olin Sims", email: "Oli@gmail.com", password: "testtest")
# Aza = User.create(username: "Azalee Wendt", email: "Aza@gmail.com", password: "testtest")
# Erm = User.create(username: "Erma Cozad", email: "Erm@gmail.com", password: "testtest")
# Myr = User.create(username: "Myrtis Rohde", email: "Myr@gmail.com", password: "testtest")
# Ewa = User.create(username: "Ewa Childs", email: "Ewa@gmail.com", password: "testtest")
# Tom = User.create(username: "Tomas Halladay", email: "Tom@gmail.com", password: "testtest")
# Der = User.create(username: "Derrick Papazian", email: "Der@gmail.com", password: "testtest")
# Suk = User.create(username: "Suk Chiasson", email: "Suk@gmail.com", password: "testtest")
# Vad = User.create(username: "Vada Mcglothin", email: "Vad@gmail.com", password: "testtest")
# Sus = User.create(username: "Susanne Policastro", email: "Sus@gmail.com", password: "testtest")
# Don = User.create(username: "Donella Birchard", email: "Don@gmail.com", password: "testtest")
# Ine = User.create(username: "Ines Pacheo", email: "Ine@gmail.com", password: "testtest")
# Mar = User.create(username: "Marco Greenhalgh", email: "Mar@gmail.com", password: "testtest")
# Fe  = User.create(username: "Fe Fairall", email: "Fe @gmail.com", password: "testtest")
# Sol = User.create(username: "Soledad Artist", email: "Sol@gmail.com", password: "testtest")
# Joi = User.create(username: "Joi Pickell", email: "Joi@gmail.com", password: "testtest")
# Myr = User.create(username: "Myra Friedlander", email: "Myr@gmail.com", password: "testtest")
# Taw = User.create(username: "Tawny Willmore", email: "Taw@gmail.com", password: "testtest")
# Mar = User.create(username: "Margrett Gupton", email: "Mar@gmail.com", password: "testtest")
# Ant = User.create(username: "Antone Courtney", email: "Ant@gmail.com", password: "testtest")
# Sof = User.create(username: "Sofia Blea", email: "Sof@gmail.com", password: "testtest")
# Ved = User.create(username: "Veda Ensor", email: "Ved@gmail.com", password: "testtest")
# Dea = User.create(username: "Deanne Lomas", email: "Dea@gmail.com", password: "testtest")
# Dan = User.create(username: "Dante Cantal", email: "danteacantal@gmail.com", password: "testtest")




# rft = Group.create(name: "Really Fun Things To Do In New York City", hometown: "New York City, NY, USA", description: "We plan and attend really fun things to do in NYC. Everything from wine tasting to paint nights... dancing to karaoke! So join us to meet new people and have a great time. We try to provide a fun, easy going environment where you can be yourself. So bring your best positive attitude and join us at our upcoming events. We will be attending free events and also paid events (most costing less than $20). We'll be attending Broadway Plays, fun holiday themed events, social painting nights and more.")
# filerft = open('https://s3.amazonaws.com/gathr-dc-seeds/rft.jpeg')
# rft.photo.attach(io: filerft, filename: 'rft.jpeg')


# nytm = Group.create(name: "New York Tech Meetup", hometown: "New York City, NY, USA", description: "About NY Tech Meetup

# Founded in 2004, NY Tech Meetup is the largest meetup group in the world. It is run by NY Tech Alliance, a non-profit organization formed by the merger of NY Tech Meetup (the non-profit) and New York Tech Council in 2016.

# Each month, our monthly meetup is held at different venues across New York City, and features live demos from New York tech companies, followed by an after party.

# About NY Tech Alliance

# The mission of the NY Tech Alliance is to represent, inspire, support, and help lead the New York technology community and ecosystem to create a better future for all. Founded in 2016 with the merger of NY Tech Meetup and the New York Technology Council, the organization has over 60,000 individual and institutional members, reflecting the full spectrum of the greater New York area tech community and making it the largest tech organization in the region. Led by Executive Director Andy Saldaña with Acting Chair Thatcher Bell, the NY Tech Alliance continues the work of its predecessor organizations, hosts a monthly Meetup as well as educational and social events, and continues to focus programming and advocacy efforts on issues important to the technology sector and New York." )
# filenytm = open('https://s3.amazonaws.com/gathr-dc-seeds/nytm.jpeg')
# nytm.photo.attach(io: filenytm, filename: 'nytm.jpeg')

# wwc = Group.create(name: "Women Who Code NYC", hometown: "New York City, NY, USA", description: "Women Who Code is the largest and most active community of engineers dedicated to inspiring women to excel in technology careers. We envision a world where women are representative as technical executives, founders, VCs, board members, and software engineers. Our programs are designed to get you there.

# Who should join?

# Our community is for professional women and allies of women in technology careers, including software engineers, developers, UX/UI designers, data scientists and more. Current and aspiring coders are welcome. Bring your laptop and a friend!")

# filewwc = open('https://s3.amazonaws.com/gathr-dc-seeds/wwc.jpeg')
# wwc.photo.attach(io: filewwc, filename: 'wwc.jpeg')


# shy = Group.create(name: "Shyness and Social Anxiety Meetup Group", hometown: "New York City, NY, USA", description: "Meet with other local people who suffer from shyness or social anxiety. Offer support and understanding and share your story with others. Learn and practice the skills it takes to over come your challenges not just with society but all so yourself. Have fun with nonjudgementel people in a relax setting. Our meet ups are to help people make friends, practice social skills, and have fun while doing both.

# ")
# fileshy = open('https://s3.amazonaws.com/gathr-dc-seeds/shy.jpg')
# shy.photo.attach(io: fileshy, filename: 'shy.jpg')


# a = Group.create(name: "New York Games Gathring", hometown: "New York, NY", description: "If you like playing games and live in New York, then come play games and live in New York with us!")

# filea = open('https://s3.amazonaws.com/gathr-dc-seeds/gaming.jpg')

# a.photo.attach(io: filea, filename: 'gaming.jpg')

# b = Group.create(name: "Fans of sitting around a bonfire drinking from red cups", hometown: "New York, NY", description: "Fans of sitting around a bonfire drinking from red cups")

# fileb = open('https://s3.amazonaws.com/gathr-dc-seeds/bonfire.jpg')

# b.photo.attach(io: fileb, filename: 'bonfire.jpg')

# c = Group.create(name: "Camelriders of Brooklyn", hometown: "New York City, NY, USA", description: "Anyone who loves camelriding in Brooklyn should join. We haven't done it or seen anyone do it but we're determined to be the first")

# filec = open('https://s3.amazonaws.com/gathr-dc-seeds/camelriding.jpg')
# c.photo.attach(io: filec, filename: 'camelriding.jpg')

