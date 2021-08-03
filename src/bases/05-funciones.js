



const saludar = function (nombre){
    return `hola, ${nombre}` ;
}

const saludar2 = (nombre) =>{
    return `Hola ${nombre}`
}

const saludar3 = (nombre) => `Hola ${nombre}`
console.log(saludar2('Vegeta'));

console.log(saludar('Goku'));
console.log(saludar3('Goku56'));

const getUser = () =>({
        uid : 'ABCD123',
        username: 'ANdres' 
});

const user = getUser();
console.log(user);

/* function getUsuarioActivo (nombre){
    return{
        uid : '123dnd',
        username : nombre,
    }

} */

const getUsuarioActivo = (nombre) =>({
    uid: 'ADVB323',
    username : nombre
})



const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);

