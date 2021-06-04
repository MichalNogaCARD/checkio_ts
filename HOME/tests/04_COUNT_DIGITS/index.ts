import "mocha";
import * as assert from 'assert';
import {CountDigits} from "../../04_COUNT_DIGITS";
import countDigits = CountDigits.countDigits;

describe('CountDigits', () => {

    it('countDigits', () => {

        assert.equal(countDigits('hi'), 0);
        assert.equal(countDigits('who is 1st here'), 1);
        assert.equal(countDigits('my numbers is 2'), 1);
        assert.equal(countDigits('This picture is an oil on canvas '
            + 'painting by Danish artist Anna '
            + 'Petersen between 1845 and 1910 year'), 8);
        assert.equal(countDigits('5 plus 6 is'), 2);
        assert.equal(countDigits(''), 0);
    })
})
