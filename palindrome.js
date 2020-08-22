// FUNCTION IMPLEMENTATION (MULTIPLE BUGS)
let str = "my gym"
  
const isPalindrome = function(str) {
  const noSpaces = str.split(" ").join("").toLowerCase();
  const midIndex = Math.ceil(noSpaces.length/2);
  const lastIndex = noSpaces.length - 1;
  let count = 0

  for (let i = 0; i <= midIndex; i++) {
    console.log(noSpaces[i])
    if (noSpaces[i] !== noSpaces[lastIndex - i]) {
      count += 1
    }
  }
  console.log(count)
  if (count === 0) {
    return true
  } else {
    return false
  }
}

isPalindrome(str)


// // Assertion Function
const assertPalindrome = function(word, expected) {
  console.log(`Testing isPalindrome(\"${word}\"):`);
  const actual = isPalindrome(word);
  if (actual === expected) {
    console.log("\x1b[32m%s\x1b[0m", `\tPASS ✅ function returned ${actual}\n`);
  } else {
    console.log("\x1b[31m%s\x1b[0m", `\tFAIL 🛑 function returned ${actual} (expected ${expected})\n`);
  }
}


// TEST CODE
// These should all pass assertion, but they don't.
assertPalindrome('p', true);
assertPalindrome('racecar', true);
assertPalindrome('my gym', true);
assertPalindrome('foo', false);
assertPalindrome('fluff', false);
assertPalindrome('just some random words', false);

// Bonus / Stretch: Uncomment these tests and figure out why these are also failing
assertPalindrome('Kayak', true);
assertPalindrome('a santa at NASA', true);