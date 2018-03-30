const rooms = require('./rooms/rooms.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(rooms);
};
