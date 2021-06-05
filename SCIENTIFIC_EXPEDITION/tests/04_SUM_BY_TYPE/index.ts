import "mocha";
import * as assert from 'assert';
import {SumByTypes} from "../../04_SUM_BY_TYPE";
import sumByTypes = SumByTypes.sumByTypes;

describe('SumByType', () => {

    it('sumByType', () => {

        assert.deepEqual(sumByTypes([]), ['', 0]);
        assert.deepEqual(sumByTypes([1, 2, 3]), ['', 6]);
        assert.deepEqual(sumByTypes(['1', 2, 3]), ['1', 5]);
        assert.deepEqual(sumByTypes(['1', '2', 3]), ['12', 3]);
        assert.deepEqual(sumByTypes(['1', '2', '3']), ['123', 0]);
        assert.deepEqual(sumByTypes(['size', 12, 'in', 45, 0]), ['sizein', 57]);
    })
})
