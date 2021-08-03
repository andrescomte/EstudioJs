
console.log('Hola mundo');

const nombre = 'Andres';
const apellido = 'Comte';

//const nombreCompleto = nombre + ' ' + apellido;

const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

function getSaludos(nombre){
    return 'Hola ' + nombre;
}

console.log(`este es un texto: ${getSaludos(nombreCompleto)}`)