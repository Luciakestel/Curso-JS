// Crea un nuevo proyecto de Node
// - Instala la dependencia ESLint (https://www.npmjs.com/package/eslint)
// - Duplica el archivo del ejercicio de la sesión 04-Textos
// - Utiliza los tres estilos de comillas de forma alterna (comillas simples, dobles, backticks)
// - Crea el fichero .eslintrc.json
// - Cambia la configuración de ESLint para que la versión ecmaVersion sea "latest"
// - Cambia la configuración de ESLint para que muestre un error cada vez que las comillas no sean dobles
// - Crea un script en el package.json para corregir automáticamente todos los errores
// - Ejecuta el script a través del terminal


const name = "Lucía";
const lastName = "Kestel";
const estudiante = name.concat(" ", lastName); 
const estudianteMayus = estudiante.toUpperCase();
const estudianteMinus = estudiante.toLowerCase();
const letters = estudiante.length;
const letterName = estudiante.charAt(0);
const lastLetterLastName = estudiante.charAt(11);
const noSpace = estudiante.trim();
const boolean = estudiante.includes(name);
