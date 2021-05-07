import "mocha";
import * as assert from 'assert';
import {BeginningZeros} from "../../13_BEGINING_ZEROS";
import beginningZeros = BeginningZeros.beginningZeros;

describe('BeginningZeros', () => {

    it('beginningZeros', () => {

        assert.equal(beginningZeros('100'), 0);
        assert.equal(beginningZeros('001'), 2);
        assert.equal(beginningZeros('100100'), 0);
        assert.equal(beginningZeros('001001'), 2);
        assert.equal(beginningZeros('012345679'), 1);
        assert.equal(beginningZeros('0000'), 4);
    })
})
