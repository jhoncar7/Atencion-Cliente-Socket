

const lblTicket1 = document.querySelector('#lblTicket1');
const lblEscritorio1 = document.querySelector('#lblEscritorio1');
const lblTicket2 = document.querySelector('#lblTicket2');
const lblEscritorio2 = document.querySelector('#lblEscritorio2');
const lblTicket3 = document.querySelector('#lblTicket3');
const lblEscritorio3 = document.querySelector('#lblEscritorio3');
const lblTicket4 = document.querySelector('#lblTicket4');
const lblEscritorio4 = document.querySelector('#lblEscritorio4');

const socket = io();

socket.on('estado-actual', (payload) => {

    const audio = new Audio('./audio/new-ticket.mp3');
    audio.play();

    const [t1, t2, t3, t4] = payload;


    lblTicket1.innerText = 'Ticket ' + t1.numero;
    lblEscritorio1.innerText = 'Escritorio ' + t1.escritorio;

    lblTicket2.innerText = 'Ticket ' + t2.numero;
    lblEscritorio2.innerText = 'Escritorio ' + t2.escritorio;

    lblTicket3.innerText = 'Ticket ' + t3.numero;
    lblEscritorio3.innerText = 'Escritorio ' + t3.escritorio;

    lblTicket4.innerText = 'Ticket ' + t4.numero;
    lblEscritorio4.innerText = 'Escritorio ' + t4.escritorio;

})

