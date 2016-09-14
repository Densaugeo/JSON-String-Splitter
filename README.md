# JSON-String-Splitter

Split concatenated JSON strings.

[![License: LGPL](https://img.shields.io/badge/license-LGPL-blue.svg)](https://opensource.org/licenses/lgpl-3.0.html)
[![View on npm](https://img.shields.io/npm/v/json-string-splitter.svg)](https://www.npmjs.org/package/json-string-splitter)
[![Build Status](https://img.shields.io/travis/Densaugeo/JSON-String-Splitter.svg)](https://travis-ci.org/Densaugeo/JSON-String-Splitter)

## Installation

Install with npm, or link the packaged file from your html:

~~~
npm install --save json-string-splitter

OR

wget https://raw.githubusercontent.com/Densaugeo/JSON-String-Splitter/master/build/Splitter.pkgd.min.js
~~~

## Import

Supports node.js, AMD, and browser global modules.

~~~
In node or with browserify:
var splitter = require('json-string-splitter');

Or directly in html:
<script type="text/javascript" src="/your/folders/Splitter.pkgd.min.js"></script>
~~~

## Usage

~~~
var splitter = require('json-string-splitter');

var pieces = splitter('{"foo":"bar"}{"more":"json"}{"partial":"json"');

console.log(pieces.jsons[0]); // '{"foo":"bar"}'
console.log(pieces.jsons[1]); // '{"more":"json"}'
console.log(pieces.remainder); // '{"partial":"json"'
~~~

## License

LGPL
