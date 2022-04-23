function findFloor(arr, num) {
    let right = arr.length - 1;
    let left = 0;
    while ( right >= left){
        let middle = Math.floor(right + left)/2;
        if(
            arr[middle] === num || 
            (arr[middle] < num && middle === arr.length - 1) || 
            (arr[middle] < num && arr[middle + 1] > num)
        ){
          return arr[middle];
        } else if (arr[middle] > num){
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }
    return -1;
  }
  

module.exports = findFloor