// Crea un nuevo fichero JS que contenga las siguientes líneas
// - Una función que admita un parámetro "num", y devuelva una lista con esa cantidad de números de la secuencia de Fibonacci (Por ejemplo: num = 6 => Resultado [1, 1, 2, 3, 5, 8])
function Fibonacci(num) {
    let fib = [];
    fib[0] = 0;
    fib[1] = 1;

    for(let i = 2; i <= num; i++){
        fib[i] = fib[i - 1] + fib[i -2]
        }
        return fib
    }
// - Ejecuta la depuración de VSCode para visualizar la ejecución de la función