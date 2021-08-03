console.log('Hola mundillo')


//Desestrucracion de arreglos

const personajes = ["Goku", "Vegeta", "Trunks"];

const [,,p3] = personajes;

console.log(p3);

const retornArreglo= () => {
    return ['ABC',123];
}

const [p1 , p2] = retornArreglo();

console.log(p1,p2)

const State = (valor) => {
    return [valor,()=> {console.log("Hola mundo")}]
}

const [nombre, f] = State();

console.log(f)
f();
console.log(nombre);
/* const arr = State("Goku");
console.log(arr)

arr[1]();

console.log(nombre)
 */