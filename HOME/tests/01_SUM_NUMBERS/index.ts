import "mocha";
import * as assert from 'assert';
import {SumNumbers} from "../../01_SUM_NUMBERS";
import sumNumbers = SumNumbers.sumNumbers;

describe('SumNumbers', () => {

    it('sumNumbers', () => {

        assert.equal(sumNumbers('hi'), 0);
        assert.equal(sumNumbers('who is 1st here'), 0);
        assert.equal(sumNumbers('my numbers is 2'), 2);
        assert.equal(sumNumbers('This picture is an oil on canvas '
            + 'painting by Danish artist Anna '
            + 'Petersen between 1845 and 1910 year'), 3755);
        assert.equal(sumNumbers('5 plus 6 is'), 11);
        assert.equal(sumNumbers(''), 0);
    })
})
