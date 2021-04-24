import "mocha";
import * as assert from 'assert';
import {RemoveAllBefore} from "../../08_REMOVE_ALL_BEFORE";
import removeAllBefore = RemoveAllBefore.removeAllBefore;

describe('RemoveAllBefore',()=>{

    it('removeAllBefore',()=>{

        assert.deepEqual(removeAllBefore([1, 2, 3, 4, 5], 3), [3, 4, 5]);
        assert.deepEqual(removeAllBefore([1, 1, 2, 2, 3, 3], 2), [2, 2, 3, 3]);
        assert.deepEqual(removeAllBefore([1, 1, 2, 4, 2, 3, 4], 2), [2, 4, 2, 3, 4]);
        assert.deepEqual(removeAllBefore([1, 1, 5, 6, 7], 2), [1, 1, 5, 6, 7]);
        assert.deepEqual(removeAllBefore([], 0), []);
        assert.deepEqual(removeAllBefore([7, 7, 7, 7, 7, 7, 7, 7, 7], 7), [7, 7, 7, 7, 7, 7, 7, 7, 7]);
    })
})
