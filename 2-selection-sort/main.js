module.exports = function selectionSort(array) {
  var unsorted = array.slice();
  var sorted = [];
  for (var n = 0; n < array.length; n++) {
    var lowest = findMin(unsorted);
    sorted.push(unsorted[lowest]);
    unsorted.splice(lowest, 1);
  }
  return sorted;
}

function findMin(array) {
  if (array.length === 0) {
    return -1;
  }
  var lowestIndex = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] < array[lowestIndex]) {
      lowestIndex = i;
    }
  }
  return lowestIndex;
}
