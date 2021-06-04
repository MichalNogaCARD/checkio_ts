import "mocha";
import * as assert from 'assert';
import {BetweenMarkers} from "../../07_BETWEEN_MARKERS";
import betweenMarkers = BetweenMarkers.betweenMarkers;

describe('BetweenMarkers', () => {

    it('betweenMarkers', () => {

        assert.equal(betweenMarkers('What is >apple<', '>', '<'), 'apple')
        assert.equal(betweenMarkers("<head><title>My new site</title></head>",
            "<title>", "</title>"), 'My new site')
        assert.equal(betweenMarkers('No[/b] hi', '[b]', '[/b]'), 'No')
        assert.equal(betweenMarkers('No [b]hi', '[b]', '[/b]'), 'hi')
        assert.equal(betweenMarkers('No hi', '[b]', '[/b]'), 'No hi')
        assert.equal(betweenMarkers('No <hi>', '>', '<'), '')
    })
})
