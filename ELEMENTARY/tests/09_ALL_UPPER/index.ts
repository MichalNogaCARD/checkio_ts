import "mocha";
import * as assert from 'assert';
import {IsAllUpper} from "../../09_ALL_UPPER";
import isAllUpper = IsAllUpper.isAllUpper;

describe('IsAllUpper', () => {

    it('isAllUpper', () => {
        assert.equal(isAllUpper('ALL UPPER'), true);
        assert.equal(isAllUpper('all lower'), false);
        assert.equal(isAllUpper('mixed UPPER and lower'), false);
        assert.equal(isAllUpper(''), true);
    })
})
