

// const getImagenPromesa = () =>{
//     return promesa = new Promise((resolve,reject) => {
//         resolve('https://asdasdsadsa.com')
//     })

// } 

// const getImagenPromesa = () => new Promise(resolve => resolve('https://asdasdsadsa.com'))
//getImagenPromesa().then(console.log)


const getImagen = async() =>{ // con async se convierte en una promesa

    try {
        const apiKey ='wZ6ZqNPzgTVX4JwbENRQ7HyeOG5VEw2X';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        // el await nos ayuda a que podamos trabajar el codigo como si fuera asincrono
        const {data} = await resp.json(); //desestructuracion de data... para obtener data

        const {url} = data.images.original;
        console.log(url)

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);

    } catch (error) {
        //manejo de error
        console.error(error)
    }
    

}



// el await nos ayuda a que podamos trabajar el codigo como si fuera asincrono
//console.log(getImagen());
getImagen()




// const apiKey ='wZ6ZqNPzgTVX4JwbENRQ7HyeOG5VEw2X';

// const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// peticion
//     .then(resp => resp.json()) // devuelve una promesa... Se le conoce promesas en cadenas
//     .then(({data}) => { // se uso la desestructuracion para obtener data de inmediato
//         //console.log(data.images.original.url)
//         const {url} = data.images.original;
//         console.log(url)

//         const img = document.createElement('img');
//         img.src = url;

//         document.body.append(img);
//     })
//     .catch(console.warn);