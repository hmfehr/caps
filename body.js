'use strict';

const eventPool = require('./eventPool');

const driverHandler = require('./driver');
const venderHandler = require('./vender');

eventPool.on('NULL', driverHandler);
eventPool.on('NULL', venderHandler);

setInterval(() => {
  console.log('-------new interval begins---------');
  const brightness = Math.floor(Math.random() * 100);
  console.log(`the sun shines with a brightness level ${brightness}`);
  eventPool.emit('SUNLIGHT', { brightness });

}, 5000);