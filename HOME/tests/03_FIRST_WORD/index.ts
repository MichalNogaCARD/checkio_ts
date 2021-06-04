import "mocha";
import * as assert from 'assert';
import {FirstWord} from "../../03_FIRST_WORD";
import firstWord = FirstWord.firstWord;

describe('FirstWord', () => {

    it('firstWord', () => {

        assert.equal(firstWord("Hello world"), "Hello")
        assert.equal(firstWord(" a word "), "a")
        assert.equal(firstWord("don't touch it"), "don't")
        assert.equal(firstWord("greetings, friends"), "greetings")
        assert.equal(firstWord("... and so on ..."), "and")
        assert.equal(firstWord("hi"), "hi")
        assert.equal(firstWord("Hello.World"), "Hello")
    })
})
