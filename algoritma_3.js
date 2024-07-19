const countWordsInInput = (INPUT, QUERY) => {

  const wordCount = {};

  INPUT.forEach(word => {
    if (wordCount[word]) {
      wordCount[word]++;
    } else {
      wordCount[word] = 1;
    }
  });

  const output = [];

  QUERY.forEach(word => {
    if (wordCount[word]) {
      output.push(wordCount[word]);
    } else {
      output.push(0);
    }
  });

  return output;
}

const INPUT = ['xc', 'dz', 'bbb', 'dz'];
const QUERY = ['bbb', 'ac', 'dz'];

const OUTPUT = countWordsInInput(INPUT, QUERY);

console.log(OUTPUT);
