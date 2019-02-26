'use strict';

function isEven(value) {
  if (value % 2 == 0) {
    return true;
  }
  else
    return false;
}

/*
This funciont has a Big-O of O(1) becuase it only takes one input and evaluates the value
of that input once, no matter what the input is, the function will only run one time.
*/
function areYouHere(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    const el1 = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
      const el2 = arr2[j];
      if (el1 === el2) return true;
    }
  }
  return false;
}

/*
This function has a Big-O of O(n^2) because it takes in two arrays as input.
As the arrays get larger, there are exponentially more iterations due to the loops conditional is set to the array length's
*/

function doubleArrayValues(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] *= 2;
  }
  return array;
}

/*
This function has a Big-O of O(n) because the function is directly dependent on the size of the array that
is passed to it.
*/

function naiveSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
}

/*
In the best case the first item in the array is equal to i meaning, this function has a Big-O of O(1)
In any other case, the function has a Big-O of O(n) becuase it has to iterate over the array.
*/

function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[i] + ', ' + arr[j]);
    }
  }
}

/* This function has a Big-O of O(n^2) because it has to loop over the provided array twice every time
the function is called */


function generateFib(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {

    // we're adding the first item
    // to the result list, append the
    // number 0 to results
    if (i === 1) {
      result.push(0);
    }
    // ...and if it's the second item
    // append 1
    else if (i == 2) {
      result.push(1);
    }

    // otherwise, sum the two previous result items, and append that value to results.
    else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  // once the for loop finishes
  // we return `result`.
  return result;
}

/*
If num is 0, or 1 the function Big-O of O(1)
In any other case, This function has a Big-O of O(n)
*/


function efficientSearch(array, item) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;

  while (minIndex <= maxIndex) {
    currentIndex = Math.floor((minIndex + maxIndex) / 2);
    currentElement = array[currentIndex];

    if (currentElement < item) {
      minIndex = currentIndex + 1;
    }
    else if (currentElement > item) {
      maxIndex = currentIndex - 1;
    }
    else {
      return currentIndex;
    }
  }
  return -1;
}

/* This binary search function has a Big-O of O(log(n)). You have to increase the size of the array by an
order of magnitude of 10 to see a significant change in runtime.
*/

function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

/*
This function is O(1), because it will return the first random array index value
*/


function isPrime(n) {
  // if n is less than 2 or a decimal, it's not prime
  if (n < 2 || n % 1 != 0) {
    return false;
  }
  // otherwise, check if `n` is divisible by any integer
  // between 2 and n.
  for (let i = 2; i < n; ++i) {
    if (n % i == 0) return false;
  }
  return true;
}

/*
Best case will be O(1) if the number is two or less the function will run once and return false.
Otherwise it is O(n). in worst case scenarios i will have to increment up to the value of n in order to find
prime numbers.
*/