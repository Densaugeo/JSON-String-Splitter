## Modules

<dl>
<dt><a href="#module_split-json">split-json</a></dt>
<dd><p>Split concatenated JSON strings</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#SplitJSON">SplitJSON(string)</a> ⇒ <code>Object</code></dt>
<dd><p>Accepts a string consisting of one or more valid JSON substrings and splits it. Any remaining string after the end of the last complete JSON substring is returned in the &#39;remainder&#39; field.</p>
<p>Passing in invalid JSON can result in garbage output</p>
</dd>
</dl>

<a name="module_split-json"></a>

## split-json
Split concatenated JSON strings

<a name="SplitJSON"></a>

## SplitJSON(string) ⇒ <code>Object</code>
Accepts a string consisting of one or more valid JSON substrings and splits it. Any remaining string after the end of the last complete JSON substring is returned in the 'remainder' field.

Passing in invalid JSON can result in garbage output

**Kind**: global function  
**Since**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | The string to look for JSON in |

**Example**  
```js
var SplitJSON = require('split-json');

var pieces = SplitJSON('{"foo":"bar"}{"more":"json"}{"partial":"json"');

console.log(pieces.jsons[0]); // '{"foo":"bar"}'
console.log(pieces.jsons[1]); // '{"more":"json"}'
console.log(pieces.remainder); // '{"partial":"json"'
```
