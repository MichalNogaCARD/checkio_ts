import "mocha";
import * as assert from 'assert';
import {EasyUnpack} from "../../02_EASY_UNPACK";
import easyUnpack = EasyUnpack.easyUnpack;

describe('EasyUnpack', () => {
    it('easyUnpack', () => {

        assert.deepEqual(easyUnpack([1, 2, 3, 4, 5, 6, 7, 9]), [1, 3, 7]);
        assert.deepEqual(easyUnpack([1, 1, 1, 1]), [1, 1, 1]);
        assert.deepEqual(easyUnpack([6, 3, 7]), [6, 7, 3]);

    })
})
