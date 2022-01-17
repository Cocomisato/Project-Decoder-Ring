// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    if (!alphabet.length == 26) {
      return false;
    }
    let obj = {};
    for (let j = 0; j < alphabet.length; j++) {
      if (obj[alphabet[j]]) {
        return false;
      } else {
        obj[alphabet[j]] = 1;
      }
    };

    
    let answer = '';
    let lowerCased = input.toLowerCase();
    const alphabet1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    if (encode) {
    for (let i = 0; i < lowerCased.length; i++) {
      if (lowerCased[i] == ' ' || !alphabet1.find(elm => elm == lowerCased[i])) {
        answer += lowerCased[i]
        continue;
      }
      let currentLetter = lowerCased[i]
      let currentIndex1 = alphabet1.indexOf(currentLetter);
      answer += alphabet[currentIndex1]
    } //jrufscpw
  } else if (!encode) {
    for (let i = 0; i < lowerCased.length; i++) {
      if (lowerCased[i] == ' ') {
        answer += lowerCased[i]
        continue;
      }
      let currentLetter = lowerCased[i];
      let currentIndex = alphabet.indexOf(currentLetter);
      answer += alphabet1[currentIndex]
    }
  }
    return answer
  }
console.log(substitution("elp xhm xf mbymwwmfj dne", "xoyqmcgrukswaflnthdjpzibev", false));

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
