import "mocha";
import * as assert from 'assert';
import {LongRepeat} from "../../02_LONG_REPEAT";
import longRepeat = LongRepeat.longRepeat;

describe('LongRepeat', () => {

    it('longRepeat', () => {

        assert.equal(longRepeat('sdsffffse'), 4);
        assert.equal(longRepeat('ddvvrwwwrggg'), 3);
        assert.equal(longRepeat(''), 0);
        assert.equal(longRepeat('abababa'), 1);
    })
})
