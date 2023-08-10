

let initialValues = ['alex', false, 12, 43, true ]; //array declarat

let otherlValues = ['robert', 20 ]; //ex.1

initialValues.push(...otherlValues); // ex.2
console.log(initialValues)

let numere = initialValues.map((numar) => { // ex.3 si 4..
    if (typeof numar === 'number') {
        return numar * 10;
    } else {
        return numar;
    }
});
console.log(numere);


let text = initialValues.map((cuvant) => {  // ex.5
    if (typeof cuvant === 'string') {
        return cuvant + ' happy codding';
    } else {
        return 0;
    }
});
console.log(text);

let invert = initialValues.map ((boolean) => { // ex.6
    if (typeof boolean === 'boolean') {
        return !boolean;
    } else {
        return 0;
    }
})
console.log(invert)





