
console.log('Hola mundo');

// arreglos en JS

//const arreglo = new Array();
const arreglo = [1,2,3,4];
/* arreglo.push(2)
arreglo.push(5)
arreglo.push(6)
arreglo.push(19) */

let arreglo2 = [...arreglo, 5];
/* arreglo2.push(5); */

// const arreglo3 = arreglo2.map();      

const arreglo3 = arreglo2.map( function(numero){
    return numero * 2;
} );





console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);