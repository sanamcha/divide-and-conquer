function findRotatedIndex(arr, num) {
 let right = arr.length -1;
 let left = 0;
 while(right >= left) {
     middle = Math.floor((right + left)/2);
     if(arr[middle] === num) {
        return middle;
     }
     if(arr[middle] < num) {
         if(arr[right] < num && arr[left] > num) {
             right = middle - 1;
         } else {
             left = middle + 1;
         }
     }
     if(arr[middle] > num){
         if(arr[left] <= num){
             right = middle - 1;
         } else {
             left = middle + 1;
         }
     }
 }
 return -1;
}

module.exports = findRotatedIndex