const assert = require('assert');
const app = require('../../src/app');

describe('\'Extra\' service', () => {
  it('registered the service', () => {
    const service = app.service('extra');

    assert.ok(service, 'Registered the service');
  });
});
