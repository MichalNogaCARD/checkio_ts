import "mocha"
import * as assert from 'assert';
import {Multiply} from "../../../source/ELEMENTARY/01_MULTIPLY";
import multTwo = Multiply.multTwo;

describe('Multiply', () => {

    it('multTwo', () => {
        assert.equal(multTwo(3, 2), 6);
        assert.equal(multTwo(0, 1), 0);
    })
})
