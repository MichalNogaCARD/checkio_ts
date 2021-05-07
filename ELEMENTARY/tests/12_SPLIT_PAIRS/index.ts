import "mocha"
import * as assert from 'assert';
import {SplitPairs} from "../../12_SPLIT_PAIRS";
import splitPairs = SplitPairs.splitPairs;

describe('SplitPairs', () => {

    it('splitPairs', () => {

        assert.deepEqual(splitPairs('abcd'), ['ab', 'cd']);
        assert.deepEqual(splitPairs('abc'), ['ab', 'c_']);
        assert.deepEqual(splitPairs('abcdf'), ['ab', 'cd', 'f_']);
        assert.deepEqual(splitPairs('a'), ['a_']);
        assert.deepEqual(splitPairs(''), []);
    })
})
