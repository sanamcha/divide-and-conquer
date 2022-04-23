function findRotationCount(arr) {
    let right = arr.length - 1;
    let left = 0;
  
    while (right >= left) {
      let middle = Math.floor((right + left) / 2);
      if (arr[middle] < arr[middle - 1]) {
        return middle;
      } else if (arr[middle] > arr[arr.length - 1]) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
    return 0;
}

module.exports = findRotationCount