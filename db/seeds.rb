# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

User.create!([
    {username: "TimBernersLee", email: "TimBernersLee@runner.com", password: "123456", first_name:"Tim", last_name:"Berners-Lee"}
]);

Route.destroy_all

Route.create!([
    {creator_id: User.first.id,
    name: "First Route",
    route: "SerializedStringLol",
    start_lat: 37.564662751371905,
    start_lng: -77.47822230769728
    },
    {creator_id: User.first.id,
    name: "Second Route",
    route: "SerializedStringLol",
    start_lat: 38.564662751371905,
    start_lng: -78.47822230769728
    },
    {creator_id: User.first.id,
    name: "Third Route",
    route: "SerializedStringLol",
    start_lat: 40.564662751371905,
    start_lng: -80.47822230769728
    }
])