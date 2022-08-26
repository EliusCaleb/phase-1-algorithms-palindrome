function isPalindrome(word) {
    
  // Write your algorithm here
  if (word == word.split('').reverse().join('')) {
    return(true );
}
else {
    return (false)
}
};
console.log(isPalindrome('robot'));
  
  

/* 
  Add your pseudocode 
  remember a  palindrome is reads the same forwards and backwards
   function has to do the following
     1)The function should have a condition statement 
     2)Return a boolean value on the  arguement  passed
     3)Deals with lowercases  strings
  */

/*
  Add written explanation of your solution here
  function with one arguement
   we will use conditional if statement
   deals with lowercases arguement 
   display boolean value to test our solution 
   test cases are 
   Input: "abba"             
   Output: true
   Input: "robot"
   Output: false
   Input: "dad"
   Output: true
   Input: "meal"
   Output: false 


*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
