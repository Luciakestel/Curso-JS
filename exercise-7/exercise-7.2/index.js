// Crea un archivo llamado objetos.js que contenga las siguientes líneas
// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const info = {
    name: 'Lucía',
    lastName: 'Kestel',
    age: 27,
    height: 163,
    isDeveloper: true,
}
// - Una variable que obtenga tu edad a partir del objeto anterior
const age = info.age
// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const data = [{
    name: 'Lucía',
    lastName: 'Kestel',
    age: 27,
    height: 163,
    isDeveloper: true,
},
{
    name: 'Jesús',
    lastName: 'Franco',
    age: 28,
    height: 173,
    isDeveloper: false,
},
{
    name: 'Milagros',
    lastName: 'Perez',
    age: 24,
    height: 168,
    isDeveloper: false,
}
]
// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
const newData = data.sort((a,b) => b.age - a.age);