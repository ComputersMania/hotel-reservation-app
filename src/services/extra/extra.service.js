// Initializes the `Extra` service on path `/extra`
const createService = require('feathers-sequelize');
const createModel = require('../../models/extra.model');
const hooks = require('./extra.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'extra',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/extra', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('extra');

  service.hooks(hooks);
};
