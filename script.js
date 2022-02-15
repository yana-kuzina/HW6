// 1
function sumTo(n) {
  return (n * (n + 1)) / 2;
}
console.log(sumTo(1));
console.log(sumTo(2));
console.log(sumTo(3));

// 2
const sentence = "Lorem ipsum dolor sit amet";

function findShort(str) {
  let arrayOfWords = str.split(" ");
  arrayOfWords.sort(function (a, b) {
    return a.length - b.length;
  });
  return arrayOfWords[0];
}

console.log(findShort(sentence)); // sit
console.log(findShort("Hello world")); // Hello
console.log(findShort("Hi")); // Hi
console.log(findShort("She is David's sister")); // is

function findShort2(str) {
  return str.split(" ").sort((a, b) => a.length - b.length)[0];
}
console.log(findShort2(sentence)); // sit
console.log(findShort("Hello world")); // Hello
console.log(findShort("Hi")); // Hi
console.log(findShort("She is David's sister")); // is
