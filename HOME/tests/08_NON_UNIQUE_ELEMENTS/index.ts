import "mocha";
import * as assert from 'assert';
import {NonUniqueElements} from "../../08_NON_UNIQUE_ELEMENTS";
import nonUniqueElements = NonUniqueElements.nonUniqueElements;

describe('NonUniqueElements', () => {

    it('nonUniqueElements', () => {

        assert.deepEqual(nonUniqueElements([1, 2, 3, 1, 3]), [1, 3, 1, 3]);
        assert.deepEqual(nonUniqueElements([1, 2, 3, 4, 5]), []);
        assert.deepEqual(nonUniqueElements([5, 5, 5, 5, 5]), [5, 5, 5, 5, 5]);
        assert.deepEqual(nonUniqueElements([10, 9, 10, 10, 9, 8]), [10, 9, 10, 10, 9]);
    })
})
