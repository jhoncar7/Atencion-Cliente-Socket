
const lblEscritorio = document.querySelector('h1');
const btnAtender = document.querySelector('button');
const lblTicket = document.querySelector('small');
const divAlerta = document.querySelector('.alert');
const lblPendientes = document.querySelector('#lblPendientes');



const searchParams = new URLSearchParams(window.location.search);

if (!searchParams.has('escritorio')) {
    window.location = 'index.html';
    throw new Error('El escritorio es obligatorio');
}

const escritorio = searchParams.get('escritorio');
lblEscritorio.innerText = `Escritorio ${escritorio}`;
divAlerta.style.display = 'none';

const socket = io();

socket.on('connect', () => {
    console.log('Conectado Cliente HTML');
    btnAtender.disabled = false;
});

socket.on('disconnect', () => {
    console.log('Desconectado X Cliente HTML');
    btnAtender.disabled = true;
});

socket.on('tickets-pendientes', (ticketsPendientes) => {
    if (ticketsPendientes === 0)
        lblPendientes.style.display = 'none';
    else
        lblPendientes.style.display = '';

    lblPendientes.innerText = ticketsPendientes;
})

btnAtender.addEventListener('click', () => {

    socket.emit('atender-ticket', { escritorio }, (payload) => {
        console.log(payload)
        if (!payload.ok) {
            lblTicket.innerText = 'Nadie.';
            return divAlerta.style.display = '';
        }

        lblTicket.innerText = `Ticket ${payload.ticket.numero}`;
    });

});