import "mocha";
import * as assert from 'assert';
import {IsEven} from "../../17_IS_EVEN";
import isEven = IsEven.isEven;

describe('IsEven', () => {

    it('isEven', () => {

        assert.equal(isEven(2), true);
        assert.equal(isEven(5), false);
        assert.equal(isEven(0), true);

    })
})
