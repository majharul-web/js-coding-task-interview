const totalNumbers=[10,12,14,46,18,78,75,79,51];
let max=totalNumbers[0];
for ( let number  of totalNumbers) {
    if(number>max){
        max=number;
    }
}
console.log(max)