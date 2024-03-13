const horas = document.querySelector('.horas');
const minutos = document.querySelector('.minutos');
const segundos = document.querySelector('.segundos');


setInterval(() => {
    let date = new Date();
    let hours = date.getHours();
    let minute = date.getMinutes();
    let seconds = date.getSeconds();

    horas.textContent = `${formatTime(hours)}`;
    minutos.textContent = `${formatTime(minute)}`;
    segundos.textContent = `${formatTime(seconds)}`;


}, 1000);
    

function formatTime(tempo) {
    return tempo < 10 ? '0' + tempo : tempo;
}