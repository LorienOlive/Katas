//------- Even Fibonacci --------//

let sum = 0;
let a = 1;
let b = 1;
let runningTotal = 1;

while (runningTotal <= 4000000) {
  if (isEven(runningTotal)) {
    sum += runningTotal;
  }
  a = b;
  b = runningTotal;
  runningTotal = a + b;
}

function isEven(n) {
  if (n % 2 === 0){
    return true;
  } else {
    return false;
  }
}

console.log(sum);


//------- 3's and 5's -------//

var sum = 0;

for (let i = 0; i <= 1000; i ++) {
  if (i % 3 === 0 || i % 5 === 0) {
    sum += i
  }
}

console.log(sum);


//------- FizzBuzz Solution 1 -------//

for (var i = 0; i <= 100; i ++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

//------- FizzBuzz Solution 2 -------//

for (var i = 0; i <= 100; i ++) {
  var fizzBuzz = "";
  if (i % 3 === 0) {
    fizzBuzz += "Fizz";
  } if (i % 5 === 0) {
    fizzBuzz += "Buzz";
  }
console.log(fizzBuzz || i);
}
