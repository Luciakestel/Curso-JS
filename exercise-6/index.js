// Crea un archivo JS que contenga las siguientes líneas
// - Una variable que contenga la lista de la compra (mínimo 5 elementos)
const list = [ 'arroz', 'naranjas', 'macarrones', 'pollo', 'champú', 'gel de ducha' ];

// - Modifica la lista de la compra y añádele "Aceite de Girasol"
list.push('Aceite de girasol');

// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
list.pop();

// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const films = [{
    title: 'Harry potter y prisionero de Azkaban',
    director: 'Alfonso Cuarón',
    year: 2004,
},
{
    title: 'Coherence',
    director: 'James Ward Byrkit' ,
    year: 2014,
},
{
    title: 'Up',
    director: 'Pete Docter',
    year: 2009,
}
]
// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const filteredFilms = films.filter((film) => film.year >= 2010);

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const directors = films.map((film) => film.director);

// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const titles = films.map((film) => film.title);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const newList = directors.concat(titles);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const newList2 = [...directors, ...titles];
