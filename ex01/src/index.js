let myArr = [];
// Only change code below this line
function* multiplication(x){
    for(var i=0; i<x; i++)
    {
        x = x * 2;
    yield x;
    myArr.push(x); 
}
}

var num = multiplication(3);

console.log(num.next().value);
console.log(num.next().value);
console.log(num.next().value);

// Only change code above this line
module.exports = multiplication;