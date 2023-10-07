let numere = [7, 10, 55, 3, 104, 73];
let suma = 0;
for (let i = 0; i < numere.length; i++){
    suma += numere[i];
}
let media = suma / numere.length;
console.log(media)

//

let sir = [56, "mere", false, 103, 250, "gutui"]
let doarNumere = sir.filter(Number);
let total = 0;
for (let i = 0; i < doarNumere.length; i++) {
    total += doarNumere[i];
}
console.log(total);

//
 
function fibonacci(num) {
    let array = [];
    array[0] = 0;
    array[1] = 1;
    for (let i = 2; i < num; i++){
        array[i] = array[i - 2] + array[i - 1];
    } return array;
}
let num = 20;
console.log(fibonacci(num))