// 1. Link - 
const isPalindrome = (word: string) => {
    const midIndex = Math.floor((word.length)/2);
    for (let i = 0; i<midIndex;i++) {
        if (word[i] != word[word.length - i]) {
            return false;
        }
    }

    return true;
}



// 2. Link - https://leetcode.com/problems/valid-palindrome/
// Recall - Two pointer with alphanum and equality match in single iteration.
function checkAlnum(char) {
    const regex = /[a-z\d]/ig;
    return regex.test(char);
;}

function isPalindrome2(s: string): boolean {
    let left = 0;
    let right = s.length - 1;

    while(left<right) {
        const leftChar = s[left].toLowerCase();
        const rightChar = s[right].toLowerCase();  
        
        if (!checkAlnum(leftChar)) {
            left++;
            continue;
        }
        if (!checkAlnum(rightChar)) {
            right--;
            continue;
        }
        if (leftChar != rightChar) {
            return false;
        }

        left++;
        right--;
    }

    return true; 
};


//3. Type - https://leetcode.com/problems/valid-palindrome-ii/
function validPalindromeType2(s: string): boolean {
    const checkPalindrome = (word: string): boolean => {
      for (let i = 0; i <= word.length - i; i++) {
        if (word[i] != word[word.length - 1 - i]) {
          return false;
        }
      }
      return true;
    };  

    for (let i = 0; i <= s.length - 1 - i; i++) {
        if (s[i] != s[s.length - 1 - i]) {
            const subString1 = s.slice(i+1, s.length - i);
            const subString2 = s.slice(i, s.length - 1 - i);
            
            if(checkPalindrome(subString1) || checkPalindrome(subString2)) {
                return true;
            }

            return false;
        }


  }

  return true;
};


