
import {getHeroeById} from './bases/08-imp-exp';
/* const promesa = new Promise((resolve, reject) => {

    setTimeout(()=>{
        
        const heroe = getHeroeById(2);
        resolve( heroe);
        // reject(heroe);
        // console.log(heroe);
        reject('No se pudo encontrar el heroe');
    },2000)

});

promesa.then((heroe) => {
    console.log('then de la promesa', heroe);
})
.catch(err => console.warn(err)); */

const getHereoByIdAsync = (id) => {

    return new Promise((resolve, reject) => {

        setTimeout(()=>{
            
            const heroe = getHeroeById(id);
            //resolve( heroe);
            if (heroe === undefined){
                reject('No se pudo encontrar el heroe')
            }else{
                resolve(heroe)
            }
            // reject(heroe);
            // console.log(heroe);
            //reject('No se pudo encontrar el heroe');
        },2000)
    
    });

}
    
getHereoByIdAsync(1).then(console.log).catch(console.warn)