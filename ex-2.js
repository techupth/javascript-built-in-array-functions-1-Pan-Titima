let words = ["apple", "cat", "dog", "elephant"];

function get5CharWords(words) {
  // Start coding here
  return words.length >= 5 ? true : false;
}

const result = words.filter(get5CharWords);

console.log(result); // Output: ["apple", "elephant"]
