# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
User.create!([
    {username: "TimBernersLee", email: "TimBernersLee@runner.com", password: "123456", first_name:"Tim", last_name:"Berners-Lee"},
    {username: "AdaLovelace", email: "AdaLovelace@runner.com", password: "123456", first_name:"Ada", last_name:"LoveLace"},
    {username: "GraceHopper", email: "GraceHopper@runner.com", password: "123456", first_name:"Grace", last_name:"Hopper"},
    {username: "Al-Khwarizmi", email: "Al-Khwarizmi@runner.com", password: "123456", first_name:"Al", last_name:"Khwarizmi"}
]);

users = User.all;

Route.destroy_all
Route.create!([
    {creator_id: users[0].id,
    name: "2 miler, Van Ness Ave",
    route: "osoeFhvdjVdBnv@tAfi@`Ie@oDo`BU_F}HXDbF",
    start_lat: 37.76839665248645,
    start_lng: -122.41780836971286
    },
    {creator_id: users[1].id,
    name: "Run by the park",
    route: "qhneFn{ejV|@xi@lS_AsAaj@oIh@MuLoH\TtL",
    start_lat: 37.761525786414346,
    start_lng: -122.42376245407027
    },
    {creator_id: users[2].id,
    name: "Duboce Park Run",
    route: "ywoeFnahjVk@aToI~@wDd@h@`ItJaAREb@h@BVBX?XAVGHAXJN@PDBTAFh@a@LD~@hAK",
    start_lat: 37.76909386873795,
    start_lng: -122.43496163272074
    },
    {creator_id: users[0].id,
    name: "Boot shaped run",
    route: "ksoeF~wbjVhO_AcA}i@uGTfA~c@wFX?lE",
    start_lat: 37.768379551595196,
    start_lng: -122.4078373592877
    },
    {creator_id: users[1].id,
    name: "fork run",
    route: "}hreFdrfjViAgSvDk@hAjS~Di@mAcShDa@vAfSj@|H[BQJCTWOUASB{ANaC\a@BcARm@LaATo@oI",
    start_lat: 37.782067606964254,
    start_lng: -122.4273862550248
    },
    {creator_id: users[2].id,
    name: "city hill park run",
    route: "y|nwFhgubMP@xAjAc@vAjCvBJNf@b@b@Vn@d@TJTAPKN[Ae@K}@I_@i@TBTPp@HBBLCJEDIAEEAIUq@QMAK@KDI@EWs@IM{@W@KNMn@kBJWVKY{A[eAKIYJUBG@KRMZGNsA}@MOCEuAzD",
    start_lat: 40.71389022515388,
    start_lng: -74.00581030238943
    },
    {creator_id: users[3].id,
    name: "long run",
    route: "eanwFtmtbMrC~DbCbCfDzE~CrFvAzBfDpEdB~CnBvD}AjBoBaFaBwBcAo@uByB_As@cA_Dk@cBw@wC[_Aa@sAM_@Hi@aHsJ",
    start_lat: 40.70947040040186,
    start_lng: -74.00170688791518
    },
    {creator_id: users[0].id,
    name: "battery park run",
    route: 'acmwFlmwbMHHTFZLNt@XFNH\L`@?^AFCBKFi@XGTMROBE\P`@WhAy@h@k@rCqChA_BHe@K]k@g@@YFQBEo@c@e@|AOBA\u@d@SZk@hAW`@e@p@u@Zg@NaAi@g@Ti@`@EOQBSA[EUAYJYJCtB',
    start_lat: 40.70464752195461,
    start_lng: -74.0170273575957
    },
    {creator_id: users[1].id,
    name: "church and 6th run",
    route: "munwFj_vbM}_@}XwDaA{BE}HVmDRyBzDnJx@nN~A`QdMtK`I~BcG",
    start_lat: 40.71270515579064,
    start_lng: -74.00966056725191
    },
    {creator_id: users[2].id,
    name: "big square",
    route: "y_owFbtrbMmADoAk@iMmFyImDdEsPrAwFv@oDpBqJ^QbAPdGfDxBtA~CdAlQ}@lDtj@_Gz@aSvA",
    start_lat: 40.714365571297485,
    start_lng: -73.99250265739565
    }
])

routes = Route.all

Bookmark.destroy_all
Bookmark.create!([
    { user_id: users[3].id, route_id: routes[0].id },
    { user_id: users[2].id, route_id: routes[1].id },
    { user_id: users[1].id, route_id: routes[2].id },
    { user_id: users[0].id, route_id: routes[3].id },
    { user_id: users[0].id, route_id: routes[4].id },
    { user_id: users[0].id, route_id: routes[5].id },
    { user_id: users[0].id, route_id: routes[6].id },
    { user_id: users[0].id, route_id: routes[7].id },
    { user_id: users[0].id, route_id: routes[8].id },
])