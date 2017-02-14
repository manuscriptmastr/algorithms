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
  'k': []
}

bfs(ex0, 'a', 'k');
