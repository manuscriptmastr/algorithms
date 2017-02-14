module.exports = function quickSort(array) {
  if (array.length <=1) {
    return array;
  }
  var left = [];
  var right = [];
  var pivot = getRandom(0, array.length);
  for (var index = 0; index < array.length; index++) {
    if (index !== pivot) {
      if (array[index] < array[pivot]) {
        left.push(array[index]);
      }
      else {
        right.push(array[index]);
      }
    }
  }
  return quickSort(left).concat(array[pivot], quickSort(right));
}

function getRandom(min, max) {
  return Math.floor(Math.random(max - min) + min);
}
