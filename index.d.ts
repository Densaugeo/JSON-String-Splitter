/**
 * Accepts a string consisting of one or more valid JSON substrings and splits it. Any remaining string after the end of the last complete JSON substring is returned in the 'remainder' field.
 * 
 * Passing in invalid JSON can result in garbage output
 * 
 * @alias splitter
 * @since 1.0.0
 * @param {string} string The string to look for JSON in
 * @returns {{ jsons: string[], remainder: '' }} 
 * 
 * @example
 * var splitter = require('json-string-splitter');
 * 
 * var pieces = splitter('{"foo":"bar"}{"more":"json"}{"partial":"json"');
 * 
 * console.log(pieces.jsons[0]); // '{"foo":"bar"}'
 * console.log(pieces.jsons[1]); // '{"more":"json"}'
 * console.log(pieces.remainder); // '{"partial":"json"'
 */
export = jsonstringsplitter;
declare function jsonstringsplitter(str: string): JSONStringSplitter.IJSONSplitted;

declare namespace JSONStringSplitter {
    interface IJSONSplitted {
        jsons: string[];
        remainder?: string;
    }
}