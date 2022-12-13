'use strict';

let eventPool = require('../eventPool');

module.exports = (payload) => {
  console.log('Driver: Package ready to be picked up!', payload);

  if(payload.pickup === 'ready') {
    eventPool.emit('PICKUP', 'no show');
    eventPool.emit('NO_SHOW', 'not ready for pick up')
  }else {
    eventPool.emit('PICKUP', "ready for pick up!")
  }
};