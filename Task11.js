const arr = [1, "2", "3", "4", "5", 6, 7, 8, 9];
function numbersStrings(arr) {
  let number = [];
  let string = [];
  for (i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "number") {
      number.push(arr[i]);
    } else {
      string.push(arr[i]);
    }
  }
  return [number, string];
}
console.log(numbersStrings(arr));
