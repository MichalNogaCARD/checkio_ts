import "mocha";
import * as assert from 'assert';
import {EndZeros} from "../../06_END_ZEROS";
import endZeros = EndZeros.endZeros;

describe('EndZeros', () => {

    it('endZeros', () => {
        assert.equal(endZeros(0), 1);
        assert.equal(endZeros(1), 0);
        assert.equal(endZeros(10), 1);
        assert.equal(endZeros(101), 0);
        assert.equal(endZeros(245), 0);
        assert.equal(endZeros(100100), 2);
    })
})
