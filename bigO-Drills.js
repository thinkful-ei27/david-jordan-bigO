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