# RunChart
### [Live Site](https://run-chart.herokuapp.com/)
### [Wiki](https://github.com/JoseMiralles/runchart/wiki)

<br/>

# About
RunChart allows users to create and search for running routes by using interactive maps.

![Route Editor](https://github.com/JoseMiralles/RunChart/blob/main/GitHub/editor-snip.jpg)

<br />

# How are routes stored in the back end?

Routes are encoded into strings.

I'm using [polylines from the Google Map JS API.](https://developers.google.com/maps/documentation/javascript/examples/polyline-simple) These are collections of coordinates that roughly look like this:

```
[
    { lat: 37.772, lng: -122.214 },
    { lat: 21.291, lng: -157.821 },
    { lat: -18.142, lng: 178.431 },
    { lat: -27.467, lng: 153.027 },
];
```

### Encoding PoliLines into strings.
The Google Maps JS API offers an [`encodePath()` method and a `decodePath()` method.](https://developers.google.com/maps/documentation/utilities/polylineutility) The `encodePath()` method encodes polilines like the one above, into a string:

```
g}n~FtfbvOdBuhEfuEf}@gmD`iG
```

These can then simply be stored into a string column in the data base. And then decoded back into a poliline whenever it needs to be re-rendered, or to calculate things like total distance.

<br/>

# How are routes searched for?

The `Routes` table has a `start_lat` and a `start_lng` float column. These values represent the latitude, and longitude of the first node in a polyline.

The North East, and South West points of the map are then used as filters to only show routes with starting points within the map bounds.

![Route Finder](https://github.com/JoseMiralles/RunChart/blob/main/GitHub/find-routes-snip.jpg)

Whenever the bounds change, a new request is sent to the server, which returns routes filtered by name, and location. This only happens when the map comes to a complete stop.