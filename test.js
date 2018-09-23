const assert = require('assert');

it('jest PD', () => {
    const three = 3;
    const seven = 7;
    const ten = 10;
    assert.ok(three * (seven * ten) === three);
});
