// Crea un archivo llamado fechas.js que contenga las siguientes líneas
// - La fecha de hoy
const date = new Date();
// - La fecha de tu nacimiento
const dateBTD = new Date('May 31, 1995');
// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const date2 = date > dateBTD;
// - Una variable que contenga el día de tu nacimiento
const dayBTD = dateBTD.getDate();
// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const monthBTD = dateBTD.getMonth() + 1;
// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const yearBTD = dateBTD.getFullYear();