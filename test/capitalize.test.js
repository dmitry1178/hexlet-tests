import { capitalize } from '../src/capitalize.js'
// import { strict as assert } from 'node:assert';
import assert from 'power-assert';
// const assert = require('assert');

assert.equal(capitalize('hello'), 'Hello');
assert.equal(capitalize(''), '');

console.log('All tests passed!');