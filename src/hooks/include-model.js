// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function () {
  const args = Array.from(arguments)
  let includes = (hook) => {
    return args.map( serviceName => {
      return { model: hook.app.services[serviceName].Model }
    })
  }
  return async context => {
    context.params.sequelize = {
      include: includes(context)
    }
    return context;
  };
};
