// Only change code below this line
function* myGenerator(){
    yield* [1,2,3,4,5];
    yield* 'Arena';
    yield* arguments;
}

const iterator = myGenerator(6,7,8);
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())

var generatorArray = [];

for( let value of iterator) {
    generatorArray.push(value);
        
}console.log(generatorArray);
// Only change code above this line
module.exports = { generatorArray, myGenerator };