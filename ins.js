function findNumber(arr){
    const arrLength = arr.length;
    let sum;
    if(arrLength === 0){
        return 'Массив пуст'
    }
    if(arrLength === 1){
        return `В массиве не хватает ${arr[0]-1} или ${arr[0]+1}`
    }
    if(!arr.includes(0)){
        // sum =((arrLength + 1) / 2 ) * (2 + arrLength)
        arr.sort((a,b)=>a-b)
        sum = (arrLength + 1) * (arr[0] + arr[arrLength-1]) / 2
    }else{
        sum = (arrLength / 2 ) * (1 + arrLength) 
    }
    for(let i = 0; i < arrLength; i++){
       sum-=arr[i] 
    }
    return sum
}
console.log(findNumber([5,1,3,2]))
// console.log(findNumber([7,9,10,11,12]));
// console.log(findNumber([5,3,1,2,0]))
// console.log(findNumber([7,10,9,12,11]));
// console.log(findNumber([5,3,1,2]))
// console.log(findNumber([0,5,3,1,2]))
// console.log(findNumber([1,2,3,4,5,7]));
// console.log(findNumber([2,3,4,5,6,7,8]));
// console.log(findNumber([1,2,3,4,5,7]));
// console.log(findNumber([]));
// console.log(findNumber([3]));
// console.log(findNumber([1,2,3,5,7]));
// console.log(findNumber([0,1,2,3,5,7]));