// Initializes the `Room type` service on path `/room-type`
const createService = require('feathers-sequelize');
const createModel = require('../../models/room-type.model');
const hooks = require('./room-type.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'room-type',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/room-type', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('room-type');

  service.hooks(hooks);
};
