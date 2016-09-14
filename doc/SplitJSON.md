<a name="module_split-json"></a>

## split-json
Split concatenated JSON strings

<a name="module_split-json.splitJSON"></a>

### split-json.splitJSON(string) ⇒ <code>Object</code>
Accepts a string consisting of one or more valid JSON substrings and splits it. Any remaining string after the end of the last complete JSON substring is returned in the 'remainder' field.

Passing in invalid JSON can result in garbage output

**Kind**: static method of <code>[split-json](#module_split-json)</code>  
**Since**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | The string to look for JSON in |

**Example**  
```js
var pieces = splitJSON('{"foo":"bar"}{"more":"json"}{"partial":"json"');

console.log(pieces.jsons[0]); // '{"foo":"bar"}'
console.log(pieces.jsons[1]); // '{"more":"json"}'
console.log(pieces.remainder); // '{"partial":"json"'
```
