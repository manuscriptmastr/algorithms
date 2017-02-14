module.exports = function binarySearch(array, item) {
  var arrayLength = array.length;
  var low = 0;
  var high = array.length - 1;
  while (low <= high) {
    var mid = Math.floor((high + low) / 2);
    if (array[mid] === item) {
      return true;
    } else if (array[mid] < item) {
      low = mid + 1;
    } else if (array[mid] > item) {
      high = mid - 1;
    }
  }
  return false;
};
