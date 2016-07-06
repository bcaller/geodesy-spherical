# geodesy-spherical

Spherical latitude / longitude functions.
Automatically built from the wonderful code at [@chrisveness/geodesy](https://github.com/chrisveness/geodesy).
I decided to make this to shrink the code for using as a Pebble package.

## Usage

```
var LatLon = require('geodesy-spherical');
var dist = new LatLon(z.latitude, z.longitude).distanceTo(new LatLon(q.latitude, q.longitude));
```

See [the actual API](https://github.com/chrisveness/geodesy#latlon-sphericaljs-latitudelongitude-geodesy-functions-on-a-spherical-earth-model).

## Building

If you want to re-build from the latest version of geodesy, run `npm install` then `grunt`.