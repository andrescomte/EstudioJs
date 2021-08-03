
console.log('Hola mundo');

const persona = {
    nombre : 'Andres',
    apellido : "Comte ",
    edad : 25,
    direccion : {
        ciudad: 'New York',
        zip : 55555111,
        lat: 14.32324,
        lng : 21341234,
    }
}

const personas2 = {...persona};

console.log(personas2,persona);