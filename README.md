# EcmaTrip

If you feel like putting a prank on your friends and colleagues this is the perfect package

### Installing

With NPM

```
npm i ecmascript --save
```

### Usage Examples

With NPM

```js
require("ecmascript");
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

var animals = ["dog", "cat"];
animals.push("bird"); // Will return ["bird", "dog", "cat"] (unshifts intead of pushing and vice versa)
```

```js
var animals = ["dog", "cat"];
animals.push("bird"); // Will return ["bird", "dog", "cat"] (unshifts intead of pushing and vice versa)
```

## Authors

- **Valentino Patoleia** - _Initial work_ - [Valentino](https://github.com/PauloPatoleia)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
