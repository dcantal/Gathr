# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

a = Group.create(name: "New York Games Gathring", hometown: "New York, NY", description: "If you like playing games and live in New York, then come play games and live in New York with us!")

filea = open('https://s3.amazonaws.com/gathr-dc-seeds/gaming.jpg')

g.photo.attach(io: filea, filename: 'gaming.jpg')

b = Group.create(name: "Fans of sitting around a bonfire drinking from red cups", hometown: "New York, NY", description: "Fans of sitting around a bonfire drinking from red cups")

fileb = open('https://s3.amazonaws.com/gathr-dc-seeds/bonfire.jpg')

b.photo.attach(io: fileb, filename: 'bonfire.jpg')

c = Group.create(name: "Camelriders of Brooklyn", hometown: "Brooklyn, NY", description: "Anyone who loves camelriding in Brooklyn should join. We haven't done it or seen anyone do it but we're determined to be the first")

filec = open('https://s3.amazonaws.com/gathr-dc-seeds/camelriding.jpg')

c.photo.attach(io: filec, filename: 'camelriding.jpg')