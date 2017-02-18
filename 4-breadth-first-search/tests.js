var bfs = require('./main');
var assert = require('assert');

var ex0 = {
  'a': ['b','c','f'],
  'b': ['f'],
  'c': ['d','e'],
  'd': ['g','h'],
  'e': ['h'],
  'f': ['g','j'],
  'g': ['i'],
  'h': ['i'],
  'i': ['k'],
  'j': ['k'],
  'k': [],
  'm': []
}

var ex1 = {
  1: [2, 3, 6],
  2: [4],
  3: [5],
  4: [8],
  5: [6, 7],
  6: [9],
  7: [8, 9],
  8: [10],
  9: [10],
  10: []
}

assert.deepEqual(bfs(ex0, 'a', 'k'), ['a', 'f', 'j', 'k']);
assert.deepEqual(bfs(ex1, 1, 10), [1, 6, 9, 10]);
assert.deepEqual(bfs(ex0, 'a', 'a'), ['a']);
assert.deepEqual(bfs(ex0, 'a', 'm'), []);
