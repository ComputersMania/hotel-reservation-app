// Initializes the `Reservation` service on path `/reservation`
const createService = require('feathers-sequelize');
const createModel = require('../../models/reservation.model');
const hooks = require('./reservation.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'reservation',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/reservation', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('reservation');

  service.hooks(hooks);
};
