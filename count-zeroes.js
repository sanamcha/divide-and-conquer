function countZeroes(arr) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
   
    while(rightIdx >= leftIdx){
        let middleIdx = Math.floor((rightIdx + leftIdx)/2);
        if (rightIdx === leftIdx){
            if(arr[rightIdx] === 1){
                return 0;
            } else {
                return arr.length;
            }
        }
        if(arr[middleIdx] === 0){
            if(arr[middleIdx -1] === 1){
                return arr.length - middleIdx;
            }
            rightIdx = middleIdx - 1;
        } else {
            if(arr[middleIdx + 1] === 0){
                return arr.length - middleIdx - 1;
            }
            leftIdx = middleIdx + 1;
        }
    }
}

module.exports = countZeroes