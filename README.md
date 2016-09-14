# SplitJSON

Split concatenated JSON strings.

[![License: LGPL](https://img.shields.io/badge/license-LGPL-blue.svg)](https://opensource.org/licenses/lgpl-3.0.html)
[![View on npm](https://img.shields.io/npm/v/split-json.svg)](https://www.npmjs.org/package/split-json)
[![Build Status](https://img.shields.io/travis/Densaugeo/Split-JSON.svg)](https://travis-ci.org/Densaugeo/Split-JSON)

## Installation

Install with npm, or link the packaged file from your html:

~~~
npm install --save split-json

OR

wget https://raw.githubusercontent.com/Densaugeo/Split-JSON/master/build/SplitJSON.pkgd.min.js
~~~

## Import

Supports node.js, AMD, and browser global modules.

~~~
In node or with browserify:
var SplitJSON = require('split-json');

Or directly in html:
<script type="text/javascript" src="/your/folders/SplitJSON.pkgd.min.js"></script>
~~~

## Usage

~~~
var SplitJSON = require('split-json');

var pieces = SplitJSON('{"foo":"bar"}{"more":"json"}{"partial":"json"');

console.log(pieces.jsons[0]); // '{"foo":"bar"}'
console.log(pieces.jsons[1]); // '{"more":"json"}'
console.log(pieces.remainder); // '{"partial":"json"'
~~~

## License

LGPL
