/**
 * Find JSON substrings in a larger string
 * 
 * @module json-detector
 */

/**
 * Accepts a string and returns the bounds of the first json substring within it. Bounds are in the format [start, end], and the substring ends before (not at) the 'end' index. This is consistent with the way end bounds are specified for .substring() and .slice()
 * 
 * .findJSON() assumes that its input string contains properly formatted JSON strings with no { in-between them. If given improperly formatted JSON, it may still return bounds, so you will still need to check for errors when passing the substrings to JSON.Parse. .findJSON() will not throw an error itself
 * 
 * @since 1.0.0
 * @param {string} string The string to look for JSON in
 * @param {number} [indexStart=0] Index to being search
 * @returns {number[]} The bounds of the first json object, in the format [start, end]
 * 
 * @example
 * var multiple_json = '{"foo":"bar"}{"more":"json"}', bounds = [];
 * 
 * bounds = findJSON(multiple_json);
 * console.log('First JSON substring is ' + multiple_json.substring(bounds[0], bounds[1]));
 * 
 * bounds = findJSON(multiple_json, bounds[1]);
 * console.log('Second JSON substring is ' + multiple_json.substring(bounds[0], bounds[1]));
 */
module.exports.findJSON = function(string, indexStart) {
  var START = 0, JSON = 1, STRING = 2, ESCAPE = 3;
  
  var state = START;
  var nesting_level = 0;
  var json_start = null;
  
  for(var i = indexStart || 0; i < string.length; ++i) {
    switch(state) {
      case START:
        switch(string[i]) {
          case '{':
            ++nesting_level;
            state = JSON;
            json_start = i;
            break;
        }
        break;
      case JSON:
        switch(string[i]) {
          case '{': ++nesting_level; break;
          case '}':
            --nesting_level;
            if(nesting_level === 0) {
              return [json_start, i + 1];
            }
            break;
          case '"': state = STRING; break;
        }
        break;
      case STRING:
        switch(string[i]) {
          case '"': state = JSON; break;
          case '\\': state = ESCAPE; break;
        }
        break;
      case ESCAPE:
        state = STRING;
        break;
    }
  }
  
  return [json_start, null];
}
