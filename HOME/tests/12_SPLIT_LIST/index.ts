import "mocha";
import * as assert from 'assert';
import {SplitList} from "../../12_SPLIT_LIST";
import splitList = SplitList.splitList;

describe('SplitList',()=>{

    it('splitList',()=>{

        assert.deepEqual(splitList([1, 2, 3, 4, 5, 6]), [[1, 2, 3], [4, 5, 6]]);
        assert.deepEqual(splitList([1, 2, 3]), [[1, 2], [3]]);
        assert.deepEqual(splitList([1, 2, 3, 4, 5]), [[1, 2, 3], [4, 5]]);
        assert.deepEqual(splitList([1]), [[1], []]);
        assert.deepEqual(splitList([]), [[], []]);
    })
})
