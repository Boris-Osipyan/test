const arr = ["b", "a", "a", "a"];
function diferentValue(arr) {
  let value;
  let count = 0;
  for (i = 0; i < arr.length; i++) {
    value = arr[i];
    for (let j = 0; j < arr.length; j++) {
      if (value === arr[j] && i != j) {
        count++;
      }
    }
    if (count > 0) {
      count = 0;
    } else {
      return (value = arr[i]);
    }
  }
  return value;
}
console.log(diferentValue(arr));

for (i = 0; i < arr.length; i++) {
  if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
    value = arr[i];
    break;
  }
}
console.log(value);
