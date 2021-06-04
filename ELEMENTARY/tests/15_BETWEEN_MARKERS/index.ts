import "mocha";
import * as assert from 'assert';
import {BetweenMarkers} from "../../15_BETWEEN_MARKERS";
import betweenMarkers = BetweenMarkers.betweenMarkers;

describe('BetweenMarkers', () => {

    it('betweenMarkers', () => {

        assert.equal(betweenMarkers('What is >apple<', '>', '<'), 'apple');
        assert.equal(betweenMarkers('What is [apple]', '[', ']'), 'apple');
        assert.equal(betweenMarkers('What is ><', '>', '<'), '');
        assert.equal(betweenMarkers('[an apple]', '[', ']'), 'an apple');
    })
})
