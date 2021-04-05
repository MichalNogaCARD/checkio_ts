import "mocha"
import * as assert from 'assert';
import {FirstWord} from "../../03_FIRST_WORD";
import firstWord = FirstWord.firstWord;

describe('FirstWord', () => {
    it('firstWord', () => {
        console.log('Example:');
        console.log(firstWord('Hello world'));

// These "asserts" are used for self-checking
        assert.equal(firstWord('Hello world'), 'Hello');
        assert.equal(firstWord('a word'), 'a');
        assert.equal(firstWord('hi'), 'hi');
    })
})
