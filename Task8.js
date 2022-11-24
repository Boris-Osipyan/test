const arr = [-1, -2, -3, 4, 5];
function isPositive(arr) {
  let countPositive = 0;
  let countNegative = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      countPositive++;
    } else {
      countNegative++;
    }
  }
  if (countPositive > countNegative) {
    return true;
  }
  return false;
}
console.log(isPositive(arr));
