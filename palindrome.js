
const isPalindrome = (str) => {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversedStr = cleanStr.split('').reverse().join('');
  
  return cleanStr === reversedStr;
};

// --- Examples ---
console.log(isPalindrome("radar"));     // true
console.log(isPalindrome("hello"));     // false
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true

