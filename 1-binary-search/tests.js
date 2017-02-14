var binarySearch = require('./main');
var assert = require('assert');

example1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
example2 = [4, 6, 16, 36, 57, 100, 200, 460];
example3 = [3];
example4 = [];
example5 = [1, 3, 5, 7, 9, 11]

assert(binarySearch(example1, 3) === true, 'It should have found 3');
assert(binarySearch(example2, 3) === false, 'It should not find 3');
assert(binarySearch(example3, 3) === true, 'It should have found 3');
assert(binarySearch(example4, 3) === false, 'You should never find anything in an empty list');
assert(binarySearch(example5, 11) === true, 'It can find elements at the far right!');
assert(binarySearch(example5, 13) === false, '13 is not in this array');
