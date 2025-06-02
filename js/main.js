function ex1(str){
    console.log([...str].filter(char => char === ' ').length)
}
let str = "  a a s aasdasdas dasgdfhd fsd  "
ex1(str)
//2
function ex2(str){
    str = str.replace(str[0],str[0].toUpperCase())
    console.log(str)
}
ex2(str)
//3
function ex3(str){
    let sumWords = str.trim(" ").split(" ").length;
    //let sumWords = str.split(" ").length;
    console.log(sumWords)
}
ex3(str)
//4
function ex4(str){
    let returnStr = str.trim(" ").split(" ")
    let ab = "";
    for(let i of returnStr){
        ab += i[0].toUpperCase() 
    }
    return ab
}
console.log(ex4(str))
//5
function reverse(str){
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed
}
function ex5(str){
    let halfStr = str.slice(0,str.length/2)
    let secondHalfStr = str.slice(str.length/2, str.length)
    secondHalfStr = reverse(secondHalfStr)
    if(secondHalfStr === halfStr) console.log("this is palidrom")
    else console.log("this is not palidrom")
}
let strPal = "a bb a"
ex5(strPal)
//6
