function* myGenerator() {
  yield insideGenerator1();
  yield insideGenerator2();
  yield insideGenerator3();
}

function* insideGenerator1() {
  for (var x of range(1, 5)) {
    yield x;
  }
}

function* insideGenerator2() {
  for (var x of range(10, 15)) {
    yield x;
  }
}

function* insideGenerator3() {
  for (var x of range(6, 9)) {
    yield x;
  }
}

var iterator = myGenerator();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

var fifteenArray = [];

for (let code of iterator) {
  fifteenArray.push(code);
}
console.log(fifteenArray);

module.exports = { fifteenArray, myGenerator };
