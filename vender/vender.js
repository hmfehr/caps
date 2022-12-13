'use strict';

let eventPool = require('../eventPool');

module.exports = (payload) => {
  console.log('Package: Package ready to be picked up!', payload);

  if(payload.pickup === 'ready') {
    eventPool.emit('PACKAGE', 'not ready');
    eventPool.emit('NO_SHOW', 'not ready for pick up')
  }else {
    eventPool.emit('PICKUP', "Package ready for pick up!")
  }
};