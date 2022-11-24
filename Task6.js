function numberSplit(number) {
  let halfNumber = [];
  if (number % 2 === 0) {
    halfNumber.push(number / 2);
    halfNumber.push(number / 2);
  } else {
    halfNumber.push((number - 1) / 2);
    halfNumber.push((number - 1) / 2 + 1);
  }
  return halfNumber;
}
console.log(numberSplit(-4));
