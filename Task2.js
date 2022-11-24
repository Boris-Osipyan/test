const arr = [1, -1, 4, 5, 66, 9];
function number(arr) {
  let array = [];
  let min = arr[0];
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (min > arr[i]) {
      min = arr[i];
    }
  }
  array.push(min);
  array.push(max);
  return array;
}
console.log(number(arr));
