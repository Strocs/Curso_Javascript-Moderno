const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];

let i = 0;

// while(i < carros.length) {
//     console.log(carros[i]);
//     i++;    
// }
console.warn('while');
// undefined
// null
// false
while(carros[i]) {
    if (i === 1)   {
        // break;
        i++;
        continue;
    }
    console.log(carros[i]);
    i++;    
}

console.warn('Do while');

let j = 0;

do {
    console.log(carros[j]);
    j++;
    
} while (carros[j]);

