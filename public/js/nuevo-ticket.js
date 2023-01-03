
const lblNuevoTicket = document.querySelector('#lblNuevoTicket');
const btnCrear = document.querySelector('button');

const socket = io();

socket.on('connect', () => {
    console.log('Conectado Cliente HTML');
    btnCrear.disabled = false;
});

socket.on('disconnect', () => {
    console.log('Desconectado X Cliente HTML');
    btnCrear.disabled = true;
});

socket.on('ultimo-ticket', (ticket) => {
    console.log({ ticket })
    lblNuevoTicket.innerText = `Ticket ${ticket}`;
})

btnCrear.addEventListener('click', () => {

    socket.emit('siguiente-ticket', null, (ticket) => {
        console.log('Desde el server', ticket);
        lblNuevoTicket.innerText = `Ticket ${ticket}`;
    });

});