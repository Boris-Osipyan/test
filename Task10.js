const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 3, 5, 7];
function eachWords(arr1, arr2) {
  let output = false;
  let count = 0;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        count++;
      }
    }
  }
  if (count === arr2.length) {
    output = true;
  }
  return output;
}
console.log(eachWords(arr1, arr2));
