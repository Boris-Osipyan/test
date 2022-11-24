function numbersStrings(number1, number2) {
  let evenNumber = [];
  let str = "There are no even numbers";
  for (i = number1 + 1; i < number2; i++) {
    if (i % 2 === 0) {
      evenNumber.push(i);
    }
  }
  if (evenNumber.length === 0) {
    return str;
  }
  return evenNumber;
}
console.log(numbersStrings(2, 4));
