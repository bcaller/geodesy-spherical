# geodesy-spherical

Spherical latitude / longitude functions.
Automatically built from the wonderful code at [@chrisveness/geodesy](https://github.com/chrisveness/geodesy).
I decided to make this to shrink the code for using as a Pebble package.

## Use

```
var geodesy = require('geodesy-spherical');
var LatLon = geodesy.LatLon;
```

See [the actual API](https://github.com/chrisveness/geodesy#latlon-sphericaljs-latitudelongitude-geodesy-functions-on-a-spherical-earth-model).

## Building

If you want to re-build from the latest version of geodesy, run `npm install` then `grunt`.