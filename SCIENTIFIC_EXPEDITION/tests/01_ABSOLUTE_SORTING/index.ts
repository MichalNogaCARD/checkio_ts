import "mocha";
import * as assert from 'assert';
import {AbsoluteSorting} from "../../01_ABSOLUTE_SORTING";
import absoluteSorting = AbsoluteSorting.absoluteSorting;

describe('AbsoluteSorting',()=>{

    it('absoluteSorting',()=>{

        assert.deepEqual(absoluteSorting([-20, -5, 10, 15]), [-5, 10, 15, -20]);
        assert.deepEqual(absoluteSorting([1, 2, 3, 0]), [0, 1, 2, 3]);
        assert.deepEqual(absoluteSorting([-1, -2, -3, 0]), [0, -1, -2, -3]);
    })
})
