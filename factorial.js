// Write a function factorial() that takes a number as an argument and returns the factorial of the number.
// Write function below
// using while loop

const factorial = number => {
  let result = 1;
  if (number <=1 ){
    return result;
  }
  while (number >=2) {
    result *= number;
    number--;
  }
  return result;
};
console.log(factorial(6));

// using For loop


// using recursion


