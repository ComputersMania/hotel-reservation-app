const room = require('./room/room.service.js');
const roomType = require('./room-type/room-type.service.js');
const reservation = require('./reservation/reservation.service.js');
const extra = require('./extra/extra.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(room);
  app.configure(roomType);
  app.configure(reservation);
  app.configure(extra);
};
