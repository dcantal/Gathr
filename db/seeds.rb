# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

Membership.destroy_all
Group.destroy_all
Event.destroy_all

rft = Group.create(name: "Really Fun Things To Do In New York City", hometown: "New York City, NY, USA", description: "We plan and attend really fun things to do in NYC. Everything from wine tasting to paint nights... dancing to karaoke! So join us to meet new people and have a great time. We try to provide a fun, easy going environment where you can be yourself. So bring your best positive attitude and join us at our upcoming events. We will be attending free events and also paid events (most costing less than $20). We'll be attending Broadway Plays, fun holiday themed events, social painting nights and more.")
filerft = open('https://s3.amazonaws.com/gathr-dc-seeds/rft.jpeg')
rft.photo.attach(io: filerft, filename: 'rft.jpeg')


nytm = Group.create(name: "New York Tech Meetup", hometown: "New York City, NY, USA", description: "About NY Tech Meetup

Founded in 2004, NY Tech Meetup is the largest meetup group in the world. It is run by NY Tech Alliance, a non-profit organization formed by the merger of NY Tech Meetup (the non-profit) and New York Tech Council in 2016.

Each month, our monthly meetup is held at different venues across New York City, and features live demos from New York tech companies, followed by an after party.

About NY Tech Alliance

The mission of the NY Tech Alliance is to represent, inspire, support, and help lead the New York technology community and ecosystem to create a better future for all. Founded in 2016 with the merger of NY Tech Meetup and the New York Technology Council, the organization has over 60,000 individual and institutional members, reflecting the full spectrum of the greater New York area tech community and making it the largest tech organization in the region. Led by Executive Director Andy Saldaña with Acting Chair Thatcher Bell, the NY Tech Alliance continues the work of its predecessor organizations, hosts a monthly Meetup as well as educational and social events, and continues to focus programming and advocacy efforts on issues important to the technology sector and New York." )
filenytm = open('https://s3.amazonaws.com/gathr-dc-seeds/nytm.jpeg')
nytm.photo.attach(io: filenytm, filename: 'nytm.jpeg')

wwc = Group.create(name: "Women Who Code NYC", hometown: "New York City, NY, USA", description: "Women Who Code is the largest and most active community of engineers dedicated to inspiring women to excel in technology careers. We envision a world where women are representative as technical executives, founders, VCs, board members, and software engineers. Our programs are designed to get you there.

Who should join?

Our community is for professional women and allies of women in technology careers, including software engineers, developers, UX/UI designers, data scientists and more. Current and aspiring coders are welcome. Bring your laptop and a friend!")

filewwc = open('https://s3.amazonaws.com/gathr-dc-seeds/wwc.jpeg')
wwc.photo.attach(io: filewwc, filename: 'wwc.jpeg')


shy = Group.create(name: "Shyness and Social Anxiety Meetup Group", hometown: "New York City, NY, USA", description: "Meet with other local people who suffer from shyness or social anxiety. Offer support and understanding and share your story with others. Learn and practice the skills it takes to over come your challenges not just with society but all so yourself. Have fun with nonjudgementel people in a relax setting. Our meet ups are to help people make friends, practice social skills, and have fun while doing both.

")
fileshy = open('https://s3.amazonaws.com/gathr-dc-seeds/shy.jpg')
shy.photo.attach(io: fileshy, filename: 'shy.jpg')


a = Group.create(name: "New York Games Gathring", hometown: "New York, NY", description: "If you like playing games and live in New York, then come play games and live in New York with us!")

filea = open('https://s3.amazonaws.com/gathr-dc-seeds/gaming.jpg')

a.photo.attach(io: filea, filename: 'gaming.jpg')

b = Group.create(name: "Fans of sitting around a bonfire drinking from red cups", hometown: "New York, NY", description: "Fans of sitting around a bonfire drinking from red cups")

fileb = open('https://s3.amazonaws.com/gathr-dc-seeds/bonfire.jpg')

b.photo.attach(io: fileb, filename: 'bonfire.jpg')

c = Group.create(name: "Camelriders of Brooklyn", hometown: "New York City, NY, USA", description: "Anyone who loves camelriding in Brooklyn should join. We haven't done it or seen anyone do it but we're determined to be the first")

filec = open('https://s3.amazonaws.com/gathr-dc-seeds/camelriding.jpg')
c.photo.attach(io: filec, filename: 'camelriding.jpg')

