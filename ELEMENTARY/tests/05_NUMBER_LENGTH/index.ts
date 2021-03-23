import "mocha";
import * as assert from 'assert';
import {NumberLength} from "../../05_NUMBER_LENGTH";
import numberLength = NumberLength.numberLength;

describe('NumberLength', () => {

    it('numberLength', () => {

        assert.equal(numberLength(10), 2);
        assert.equal(numberLength(0), 1);
        assert.equal(numberLength(4), 1);
        assert.equal(numberLength(44), 2);
    })
})
