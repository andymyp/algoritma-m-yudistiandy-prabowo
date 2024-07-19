const longestWord = (string) => {

  const words = string.split(' ');

  let longestWord = '';

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }

  return longestWord;
}

const string = "Saya sangat senang mengerjakan soal algoritma";
const longest = longestWord(string);
const char_length = longest.length;

console.log(`${longest}: ${char_length} character`);
