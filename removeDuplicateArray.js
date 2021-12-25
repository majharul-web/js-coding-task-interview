// removeDuplicateArray.js
let numbers = [1, 5, 2, 5, 2, 1, 6, 8, 5, 8, 4, 6, 4, 5, 7, 9,];
let unique = [];

for (let number of numbers) {
    if (unique.indexOf(number) == -1) {
        unique.push(number);
    }

}
console.log(unique);
