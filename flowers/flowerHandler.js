'use strict';

const Chance = require('chance');
const chance = new Chance();

const generateOrder = (socket) => (payload = null) => {
  payload = payload ? payload : {
    'vendorId' : 'flowers',
    'orderId' : chance.guid(),
    'customer': chance.name(),
    'address': chance.address(),
  };

  console.log('Vendor: Order for pick-up');
  socket.emit('PICKUP', payload);
};

const thankDriver = (payload) => {
  console.log('Vendor: Thank you for delivering to:', payload.customer);
};

module.exports = { generateOrder, thankDriver };
