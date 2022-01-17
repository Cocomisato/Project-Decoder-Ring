// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  
    function polybius(input, encode = true) {
      let answer = '';
      let lowerCasedStr = input.toLowerCase();
      const alphabetJoined = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', '(i/j)', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ']
      
      
      for (let i = 0; i < lowerCasedStr.length; i++) {
        let currentLetter = lowerCasedStr[i]
        let index = alphabetJoined.indexOf(currentLetter) + 1;   
        if (currentLetter == ' ') {
          answer += currentLetter
          continue
        };
  
        if (encode) {
        if (index < 6) {
          answer += index
          answer += 1      
        } else if (index > 5 && index < 11) {
          answer += index - 5
          answer += 2
        } else if (index > 10 && index < 16) {
          answer += index - 10
          answer += 3
        } else if (index > 15 && index < 21) {
          answer += index - 15
          answer += 4
        } else if (index > 20 && index < 26) {
          answer += index - 20
          answer += 5
        }               
      }
    }
      if (!encode) { 
        const temp = input.replace(" ",16);
        if (temp.length % 2 !== 0) {
          return false;
        } 
        
        let newStr = temp.match(/.{1,2}/g)   // ['31', '32', '43', '24', '25']
        for (const numEach of newStr) {
          if (numEach == ' ') {
            answer += numEach
          };
          let num1 = numEach[0]
          let num2 = numEach[1]
          if (num2 == 1) {
            answer += alphabetJoined[parseInt(num1) - 1]  
          } else if (num2 == 2) {
            answer += alphabetJoined[parseInt(num1) + 5 - 1];
          } else if (num2 == 3) {
            answer += alphabetJoined[parseInt(num1) + 10 - 1];
          } else if (num2 == 4) {
            answer += alphabetJoined[parseInt(num1) + 15 - 1];
          } else if (num2 == 5) {
            answer += alphabetJoined[parseInt(num1) + 20 - 1];
          } else if (num2 == 6) {
            answer += alphabetJoined[parseInt(num1) + 25 - 1];
          }
        } 
      } 
     return answer
    }
    console.log(polybius("Hello world"))
  
    return {
      polybius,
    };
  })();
  
  module.exports = { polybius: polybiusModule.polybius };
  