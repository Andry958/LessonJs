let arr = [1,2,3,4,5]
for(let i = 0; i< 10; i++){
    arr.push(Math.floor(Math.random()*100))
}
for(let i in arr){
    console.log(i)
}
// console.log("Filtered: ", arr.filter(i => i % 10 === 0 ))
//2
for (let i = 0; i < arr.length; i++){
    console.log(`[${i+1}]- ${arr[i]}`)
}
//3
for (let i in arr){
    if (i % 7 == 0){
        console.log("number found!");
        break;
    }
}
//4
let arrDec = arr.sort((a,b) => b - a);
function Print(arr){
    for (let i = 0; i < arr.length; i++){
        console.log(`[${i+1}]- ${arr[i]}`)
    }
}
Print(arrDec)
//5
arr.fill(0,arr.length/2,arr.length + 1);
Print(arr)
//6
arr.splice(0,3)
Print(arr);
//7
if (arr.every(el => el === arr[0])) {
    console.log("arr have same num");
}
//8
let newArr= arr.splice(1, arr.length - 1)
Print(newArr)
//9
Print(newArr)
let sum_ = newArr.filter(x => x%2===0 && x !== 0).length;
console.log("sum->", sum_);
