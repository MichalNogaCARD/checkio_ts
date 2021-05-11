import "mocha";
import * as assert from "assert";
import {ReplaceFirst} from "../../10_REPLACE_FIRST";
import replaceFirst = ReplaceFirst.replaceFirst;

describe('ReplaceFirst', () => {

    it('replaceFirst', () => {
        assert.deepEqual(replaceFirst([1, 2, 3, 4]), [2, 3, 4, 1]);
        assert.deepEqual(replaceFirst([1]), [1]);
        assert.deepEqual(replaceFirst([]), []);

    })
})
