function sortedFrequency(arr, num) {
    let first = findFirst(arr, num);
    let last = findLast(arr, num);
    if(first === -1) return -1;
    else return last - first + 1;
}

function findFirst(arr, num) {
    let left = 0;
    let right = arr.length - 1;
 
    while(right >= left ){
        middle = Math.floor((right + left)/2);
        if(
            (arr[middle] === num && middle === 0) || 
            (arr[middle] === num && arr[middle - 1] !== num)
        ) {
            return middle;
        } else if ( num <= arr[middle]){
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }
    return -1;
}

function findLast(arr, num){
    let left = 0;
    let right = arr.length - 1;
 
    while(right >= left ){
        middle = Math.floor((right + left)/2);
        if(
            (arr[middle] === num && middle === arr.length - 1) || 
            (arr[middle] === num && arr[middle + 1] !== num)
        ) {
            return middle;
        } else if ( num >= arr[middle]){
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
}

module.exports = sortedFrequency