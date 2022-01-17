// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
function nonalphabetics(lowerCasedStr, currentLetter) {  //"!"
  let index = lowerCasedStr.indexOf(currentLetter);  //24
  let charCodeNonAlphabet = lowerCasedStr.charCodeAt(index)  //33
  if (charCodeNonAlphabet < 97 || charCodeNonAlphabet > 122) {
    return currentLetter; //!
  }
};

  function caesar(input, shift = 0, encode = true) {
    let answer = '';
    let lowerCasedStr = input.toLowerCase();

    if (!shift || shift < -25 || shift > 25) {
      return false;
    }
    for (let i = 0; i < lowerCasedStr.length; i++) {
      let currentLetter = lowerCasedStr[i];

      if (currentLetter == ' ' || nonalphabetics(lowerCasedStr, currentLetter)) {
        answer += currentLetter;
        continue;
      }
      
      let currentIndex = lowerCasedStr.indexOf(currentLetter)  //2
      let charCode = lowerCasedStr.charCodeAt(currentIndex); //i => 105
      if (encode) {
      let newIndex = charCode + shift; // 105 + 12 = 117
      if (newIndex > 122) {
        let wrapAround = newIndex - 26;
        answer += String.fromCharCode(wrapAround);
        continue;
      }
      answer += String.fromCharCode(newIndex);
    } else if (!encode) {
      let decodeIndex = charCode - shift;
      if (decodeIndex < 97) {
        let wrapAround2 = decodeIndex + 26;
        answer += String.fromCharCode(wrapAround2);
        continue;
      }
      answer += String.fromCharCode(decodeIndex);
    };
    }
    return answer
  }
  console.log(caesar("BPQA qa I amkzmb umaaiom?", 8, false))

  return {
    caesar,
  };



})();




module.exports = { caesar: caesarModule.caesar };
