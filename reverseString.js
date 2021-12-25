const name = 'Majharul';

const stringReverseProgram = name => {
    let reverseString = '';
    for (let letter of name) {
        reverseString = letter + reverseString;
    }
    return reverseString;
}
console.log(stringReverseProgram(name));