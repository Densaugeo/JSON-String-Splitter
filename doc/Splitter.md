## Modules

<dl>
<dt><a href="#module_json-string-splitter">json-string-splitter</a></dt>
<dd><p>Split concatenated JSON strings</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#splitter">splitter(string)</a> ⇒ <code>Object</code></dt>
<dd><p>Accepts a string consisting of one or more valid JSON substrings and splits it. Any remaining string after the end of the last complete JSON substring is returned in the &#39;remainder&#39; field.</p>
<p>Passing in invalid JSON can result in garbage output</p>
</dd>
</dl>

<a name="module_json-string-splitter"></a>

## json-string-splitter
Split concatenated JSON strings

<a name="splitter"></a>

## splitter(string) ⇒ <code>Object</code>
Accepts a string consisting of one or more valid JSON substrings and splits it. Any remaining string after the end of the last complete JSON substring is returned in the 'remainder' field.

Passing in invalid JSON can result in garbage output

**Kind**: global function  
**Since**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | The string to look for JSON in |

**Example**  
```js
var splitter = require('json-string-splitter');

var pieces = splitter('{"foo":"bar"}{"more":"json"}{"partial":"json"');

console.log(pieces.jsons[0]); // '{"foo":"bar"}'
console.log(pieces.jsons[1]); // '{"more":"json"}'
console.log(pieces.remainder); // '{"partial":"json"'
```
