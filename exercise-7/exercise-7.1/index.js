// Crea un archivo llamado conjuntos.js que contenga las siguientes líneas

// - Un nuevo Set con los nombres de tu familia
const family = ['Guillermo', 'Carmen', 'Facundo', 'Sofía', 'Simón', 'Lucía'];
const familySet = new Set(family);
// - Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
familySet.add('Lucía');
// - Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
familySet.add('JavaScript');