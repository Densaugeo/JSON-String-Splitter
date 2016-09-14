<a name="module_json-detector"></a>

## json-detector
Find JSON substrings in a larger string

<a name="module_json-detector.findJSON"></a>

### json-detector.findJSON(string, [indexStart]) ⇒ <code>Array.&lt;number&gt;</code>
Accepts a string and returns the bounds of the first json substring within it. Bounds are in the format [start, end], and the substring ends before (not at) the 'end' index. This is consistent with the way end bounds are specified for .substring() and .slice()

.findJSON() assumes that its input string contains properly formatted JSON strings with no { in-between them. If given improperly formatted JSON, it may still return bounds, so you will still need to check for errors when passing the substrings to JSON.Parse. .findJSON() will not throw an error itself

**Kind**: static method of <code>[json-detector](#module_json-detector)</code>  
**Returns**: <code>Array.&lt;number&gt;</code> - The bounds of the first json object, in the format [start, end]  
**Since**: 1.0.0  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| string | <code>string</code> |  | The string to look for JSON in |
| [indexStart] | <code>number</code> | <code>0</code> | Index to being search |

**Example**  
```js
var multiple_json = '{"foo":"bar"}{"more":"json"}', bounds = [];

bounds = findJSON(multiple_json);
console.log('First JSON substring is ' + multiple_json.substring(bounds[0], bounds[1]));

bounds = findJSON(multiple_json, bounds[1]);
console.log('Second JSON substring is ' + multiple_json.substring(bounds[0], bounds[1]));
```
