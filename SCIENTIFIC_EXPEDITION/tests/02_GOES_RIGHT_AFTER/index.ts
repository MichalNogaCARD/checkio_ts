import "mocha";
import * as assert from 'assert';
import {GoesAfter} from "../../02_GOES_RIGHT_AFTER";
import goesAfter = GoesAfter.goesAfter;

describe('GoesAfter', () => {

    it('goesAfter', () => {

        assert.equal(goesAfter('world', 'w', 'o'), true);
        assert.equal(goesAfter('world', 'w', 'r'), false);
        assert.equal(goesAfter('world', 'l', 'o'), false);
        assert.equal(goesAfter('panorama', 'a', 'n'), true);
        assert.equal(goesAfter('list', 'l', 'o'), false);
        assert.equal(goesAfter('', 'l', 'o'), false);
        assert.equal(goesAfter('list', 'l', 'l'), false);
        assert.equal(goesAfter('world', 'd', 'w'), false);
        assert.equal(goesAfter('almaz', 'r', 'a'), false);
    })
})
