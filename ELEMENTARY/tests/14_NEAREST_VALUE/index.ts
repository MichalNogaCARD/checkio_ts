import "mocha"
import * as assert from 'assert';
import {NearestValue} from "../../14_NEAREST_VALUE";
import nearestValue = NearestValue.nearestValue;

describe('NearestValue', () => {

    it('nearestValue', () => {

        assert.equal(nearestValue([4, 7, 10, 11, 12, 17], 9), 10);
        assert.equal(nearestValue([4, 7, 10, 11, 12, 17], 8), 7);
        assert.equal(nearestValue([4, 8, 10, 11, 12, 17], 9), 8);
        assert.equal(nearestValue([4, 9, 10, 11, 12, 17], 9), 9);
        assert.equal(nearestValue([4, 7, 10, 11, 12, 17], 0), 4);
        assert.equal(nearestValue([4, 7, 10, 11, 12, 17], 100), 17);
        assert.equal(nearestValue([5, 10, 8, 12, 89, 100], 7), 8);
        assert.equal(nearestValue([-1, 2, 3], 0), -1);
        assert.equal(nearestValue([0, -2], -1), -2);
    })
})
