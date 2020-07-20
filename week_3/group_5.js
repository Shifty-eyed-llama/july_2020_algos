/*
  Balance Point
  Write a function that returns whether the given
  array has a balance point BETWEEN indices,
  where one side’s sum is equal to the other’s.
*/
function balancePoint(arr){

}
// EX. [1, 2, 3, 4, 10] => TRUE
// EX. [1, 2, 4, 2, 1] => FALSE
function balanceIndex(arr){

}
// EX. [-2, 5, 7, 0, 3] => 2
// EX. [9,0,9] => 1
// EX. [9,9] => -1

function balancePoint(arr){
  var leftSum = 0;
  var rightSum = 0;
  for (var i = 0; i < arr.length; i++) {
    rightSum += arr[i];
  }
  for (var i = 0; i < arr.length; i++) {
    leftSum += arr[i];
    rightSum -= arr[i];
    if (leftSum === rightSum) {
      return true;
    }
  }
  return false;
}

function balanceIndex(arr){
  if (arr.length <= 1) {
    return -1;
  }
  var leftSum = 0;
  var rightSum = 0;
  for (var i = 0; i < arr.length; i++) {
    rightSum += arr[i];
  }
  for (var i = 0; i < arr.length; i++) {
    rightSum -= arr[i];
    if (leftSum === rightSum) {
      return i;
    }
    leftSum += arr[i];
  }
  return -1;
}

// Tests
console.log('Balance point tests:')
console.log(balancePoint([1,2,3,4,10])); // true
console.log(balancePoint([1,2,4,2,1])); // false
console.log(balancePoint([1])); // false
console.log(balancePoint([])); // false
console.log(balancePoint([-2,2,3,4,7])); // true
console.log(balancePoint([1,2,3,4,12,-2])); // true

console.log('Balance index tests:')
console.log(balanceIndex([-2,5,7,0,3])); // 2
console.log(balanceIndex([9,0,9])); // 1
console.log(balanceIndex([9,1,0,9])); // 1
console.log(balanceIndex([1,1,1,1,1,1,0,6])); // 6
console.log(balanceIndex([9,9])); // -1
console.log(balanceIndex([1])); // -1
console.log(balanceIndex([])); // -1

