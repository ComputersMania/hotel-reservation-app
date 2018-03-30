const assert = require('assert');
const app = require('../../src/app');

describe('\'Reservation\' service', () => {
  it('registered the service', () => {
    const service = app.service('reservation');

    assert.ok(service, 'Registered the service');
  });
});
