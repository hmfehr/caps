'use strict';

const Event = require('events');

const eventPool = new Event();

//driver client vender lists
function VendersEmail(){
  console.log('vender sends updates');

  // creating a  payload to be emitted
  let payload = {text: 'Package update'};

  // emitting an event
  eventPool.emit('SEND_MESSAGE', payload);
}

function DriversEmail(payload) {
  setTimeout(() => {
    
    console.log('Message Received by Drivers: ', payload);
  }, 2000);
}

function ClientsEmail(payload) {
  setTimeout(() => {
    console.log('Message Received by Clients: ', payload);
    
  }, 2500);

}

eventPool.on('SEND_MESSAGE', DriversEmail);
eventPool.on('SEND_MESSAGE', ClientsEmail);

setInterval(() => {
  VendersEmail();
  
}, 5000);