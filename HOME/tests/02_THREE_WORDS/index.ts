import "mocha";
import * as assert from 'assert';
import {ThreeWords} from "../../02_THREE_WORDS";
import threeWords = ThreeWords.threeWords;

describe('ThreeWords', () => {

    it('threeWords', () => {

        assert.equal(threeWords("Hello World hello"), true);
        assert.equal(threeWords("He is 123 man"), false);
        assert.equal(threeWords("1 2 3 4"), false);
        assert.equal(threeWords("bla bla bla bla"), true);
        assert.equal(threeWords("Hi"), false);

    })
})
