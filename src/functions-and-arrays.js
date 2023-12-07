// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {
  return a > b ? a : b;
}

// Iteration 2 | Find the Longest Word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

function findLongestWord(arr) {
  let longest = "";
  if (arr.length === 0) longest = 0;
  for (const word of arr) {
    if (word.length > longest.length) {
      longest = word;
      console.log(longest);
    }
  }
  return longest;
}

findLongestWord(words);

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr) {
  // const sum = arr.reduce((a,b)=> a+b,0)
  let sum = 0;
  for (const num of arr) {
    sum += num;
  }
  return sum;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
  let sum = 0;
  for (const num of arr) {
    sum += num;
    console.log(sum);
  }
  const avg = arr.length > 0 ? sum / arr.length : 0;
  return avg;
}
averageNumbers(numbers2);

// Iteration 5 | Find Elements
const words2 = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(arr, word) {
  if (!arr || !word) return null;
  // return arr.includes(word)
  for (const el of arr) {
    if (word === el) {
      return true;
    }
  }
  return false;
}
