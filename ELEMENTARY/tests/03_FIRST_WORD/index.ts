import "mocha"
import * as assert from 'assert';
import {FirstWord} from "../../03_FIRST_WORD";
import firstWord = FirstWord.firstWord;

describe('FirstWord', () => {
    it('firstWord', () => {

        assert.equal(firstWord('Hello world'), 'Hello');
        assert.equal(firstWord('a word'), 'a');
        assert.equal(firstWord('hi'), 'hi');
    })
})
