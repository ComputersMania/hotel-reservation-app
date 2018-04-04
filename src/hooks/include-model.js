// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function () {
  return async context => {
    includes = arguments.map((serviceName) => {
      return { model: hook.app.services[serviceName].Model }
    })
    hook.params.sequelize = {
      include: includes
    }
    return context;
  };
};
