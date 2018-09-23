const assert = require('assert');

it('jest PD', () => {
    const truthy = '1';
    const falsy = 0;
    assert.ok(truthy === falsy);
});
