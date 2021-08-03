// import {heroes} from './data/heroes';
//import {heroes} from './data/heroes'

//import  heroes, { owner } from "../data/heroes";
import  heroes from "../data/heroes";

// const getHeroeById = (id) => {
//     return heroes.find( (heroe) => {
//         if (heroe.id == id){
//             return true;
//         }else{return false }
//     });
// }


// const getHeroeById = (id) => {
//     return heroes.find((heroe) => heroe.id===id);
// }

// console.log(owner);
export const getHeroeById = (id) => heroes.find ((heroe) => heroe.id === id);

// const ec = getHeroeById(2);
// console.log(ec);

export const getHeroesByOwner = (owner) => heroes.filter( (heroe) => heroe.owner === owner);

//console.log(getHeroesByOwner('Marvel'));

