const arr1 = ["dog", "cat", "parrot"];
const arr2 = ["lizard", "rat", "cat"];
function eachWords(arr1, arr2) {
  let output = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        output.push(arr1[i]);
      }
    }
  }
  return output;
}
console.log(eachWords(arr1, arr2));
