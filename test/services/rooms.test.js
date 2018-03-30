const assert = require('assert');
const app = require('../../src/app');

describe('\'Rooms\' service', () => {
  it('registered the service', () => {
    const service = app.service('rooms');

    assert.ok(service, 'Registered the service');
  });
});
