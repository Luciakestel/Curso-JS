
// - Crea una cookie que caduque en 2 minutos con los datos del objeto anterior
// - Observa en Google Chrome cómo se almacenan los datos en la SessionStorage, LocalStorage y las cookies
// - Cierra el navegador, comenta las líneas que almacenan SessionStorage, LocalStorage y CookieStorage y vuelve a abrirlo
// - Observa cómo la SessionStorage está vacía
// - Observa cómo la LocalStorage sigue manteniendo el objeto que has almacenado antes de cerrar el navegador
// - Observa cómo la cookie sigue manteniendo el objeto que has almacenado antes, aunque ya está caducado

const name = 'Lucia';
const lastName = 'Kestel';

const info = {
    name: name,
    lastName: lastName
}
sessionStorage.setItem('info', JSON.stringify(info));
localStorage.setItem('info', JSON.stringify(info));


document.cookie = "nombreCookie=Lucia Kestel";
document.cookie = "nombreCaducidad=Lucia Kestel; expires=" + new Date(now.getTime() + 2 * 60000) ;
