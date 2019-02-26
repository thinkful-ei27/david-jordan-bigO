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

Are you here ?
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