// Every "a" in the string should be replaced with a "4".
// Every "e" in the string should be replaced with a "3".
// Every "o" (oh) in the string should be replaced with a "0" (zero).
// Every "l" (el) in the string should be replaced with a "1" (one).

let password = process.argv[2];
//console.log(password)

const passwordBuilder = function(password) {
  let result = "";
  result = password.replace(/a/g, "4");
  result = result.replace(/e/g, "3");
  result = result.replace(/o/g, "0");
  result = result.replace(/l/g, "1");
  return result;
};

console.log(passwordBuilder(password));