import "mocha";
import * as assert from 'assert';
import {MaxDigit} from "../../11_MAX_DIGIT";
import maxDigit = MaxDigit.maxDigit;

describe('MaxDigit', () => {

    it('maxDigit', () => {
        assert.equal(maxDigit(0), 0);
        assert.equal(maxDigit(52), 5);
        assert.equal(maxDigit(634), 6);
        assert.equal(maxDigit(1), 1);
        assert.equal(maxDigit(10000), 1);

    })
})
