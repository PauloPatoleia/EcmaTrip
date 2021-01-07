# EcmaTrip

If you feel like pulling a prank on your friends and colleagues this is the perfect package

### Installing

Install it onto a project that a friend or colleague are working on and watch them cry out loud trying to debug it :D

```
npm i ecmatcript --save
```

### Usage Examples

```js
require("ecmatrip");
```

You can also download the index.js file and import it into your HTML

```html
<script type="text/javascript" src="path-to-javascript-file.js"></script>
```

## How it works

This package leverages the power of prototypal inheritance in JavaScript to change the default behavior of native String and Array methods

Supported methods:

```js
// Strings
String.prototype.startsWith;
String.prototype.endsWith;
String.prototype.includes;
String.prototype.charAt;
String.prototype.slice;
String.prototype.charCodeAt;
String.prototype.lastIndexOf;

// Arrays
Array.prototype.pop;
Array.prototype.shift;
Array.prototype.unshift;
Array.prototype.push;
Array.prototype.slice;
Array.prototype.splice;

// More will be added in the future
```

All those methods had their functionality slightly changed to be imprecise and create chaos

## Usage examples

```js
"Blue House".includes("blue"); // returns true or false (random);
```

```js
var animals = ["dog", "cat"];
animals.push("bird"); // The array will look like: ["bird", "dog", "cat"]
// (unshifts instead of pushing and vice versa)
```

## Authors

- **Valentino Patoleia** - _Initial work_ - [Github](https://github.com/PauloPatoleia)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
