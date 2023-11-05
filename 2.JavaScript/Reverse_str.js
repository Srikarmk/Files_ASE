function reverseString(inputstr) {
  function reverseWord(word) {
    let reversed = "";
    for (let i = word.length - 1; i >= 0; i--) {
      reversed += word[i];
    }
    return reversed;
  }

  let words = inputstr.split(" ");
  let reversedWords = [];

  for (let i = 0; i < words.length; i++) {
    reversedWords.push(reverseWord(words[i]));
  }

  return reversedWords.join(" ");
}

const inputstr = "This is a sunny day";
const reverstr = reverseString(inputstr);
console.log(reverstr);
