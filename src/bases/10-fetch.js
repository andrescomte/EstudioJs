

const apiKey ='wZ6ZqNPzgTVX4JwbENRQ7HyeOG5VEw2X';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
    .then(resp => resp.json()) // devuelve una promesa... Se le conoce promesas en cadenas
    .then(({data}) => { // se uso la desestructuracion para obtener data de inmediato
        //console.log(data.images.original.url)
        const {url} = data.images.original;
        console.log(url)

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    })
    .catch(console.warn);