// Crea un archivo JS que contenga las siguientes líneas
// - Una variable que contenga tu altura en centímetros (entero)
// - Una variable que contenga tu altura en metros (número de coma flotante)
// - Una variable que contenga tu peso en kilogramos (número de coma flotante)
// - Una variable que contenga tu altura en metros redondeada hacia arriba
// - Una variable que contenga tu peso en kilogramos redondeado hacia abajo
// - Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript

const height = 163;
const heightMeters = height / 100;
const weight = 63.7;
const heightMetersFloat = heightMeters.toPrecision(1);
const weightFloat = parseInt(weight);
const maxValue = Number.MAX_VALUE;
const maxValueOne = Number.MAX_VALUE + 1;
console.log(maxValue === maxValueOne);