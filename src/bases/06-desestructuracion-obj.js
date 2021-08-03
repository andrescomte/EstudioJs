console.log('Hola mundillo')


//Desestructuracion 
//Asignacion desestructurante 

const persona = {
    nombre : "Andres",
    edad: 45,
    clave : "Andresito",
    rango : "soldado"
    
};

// const {nombre} = persona; 
// const {nombre,edad,clave} = persona; 

// console.log(nombre);
// console.log(edad);
// console.log(clave);

// const retornaPersona = (usuario) => {

//     const {edad,clave,nombre} = usuario
//     console.log(edad,clave,nombre)
// }

const Context = ({clave, nombre,edad,rango= 'Capitan'}) => {

    //const {edad,clave,nombre} = usuario
    //console.log(nombre,edad,rango)

    return {
        nombreClave : clave,
        anios : edad,
        latlng: {
            lat : 12.342,
            lgn: -9.876
        }
    }


}

//const per = Context(persona);

//const {nombreClave,anios,latlng:{lat,lgn}} = Context(persona);
const {nombreClave,anios,latlng} = Context(persona);
const {lat,lgn} = latlng;
console.log(nombreClave,anios)
console.log(lat,lgn);

//console.log(per);