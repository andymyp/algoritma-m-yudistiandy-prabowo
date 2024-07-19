const reverseAlphabet = (input) => {

  let letters = input.match(/[a-zA-Z]/g);
  let numbers = input.match(/\d+/g);

  if (!letters) {
    return input;
  }

  let reversed = letters.reverse().join('');

  if (numbers) {
    reversed += numbers.join('');
  }

  return reversed;
}

let input = "NEGIE1";
let result = reverseAlphabet(input);

console.log(result);
