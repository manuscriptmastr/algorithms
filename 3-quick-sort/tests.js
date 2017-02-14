var quickSort = require('./main');
var assert = require('assert');

var ex0 = {
  before: [4, 17, 0, 300, 246, 1],
  after: [0, 1, 4, 17, 246, 300]
}
var ex1 = {
  before: ['a', 'h', 'd', 'g', 'y', 'n', 'v', 'c'],
  after: ['a', 'c', 'd', 'g', 'h', 'n', 'v', 'y']
}
var ex2 = {
  before: [3, 16, 45, 3],
  after: [3, 3, 16, 45]
}
var ex3 = {
  before: [-1, 24, 5],
  after: [-1, 5, 24]
}
var ex4 = {
  before: [3],
  after: [3]
}
var ex5 = {
  before: [],
  after: []
}

var examples = [ex0, ex1, ex2, ex3, ex4, ex5];

for (var example of examples) {
  var sorted = quickSort(example.before);
  var expected = example.after;
  assert.deepEqual(sorted, expected, 'Expected ' + sorted + ' to be ' + expected);
}
