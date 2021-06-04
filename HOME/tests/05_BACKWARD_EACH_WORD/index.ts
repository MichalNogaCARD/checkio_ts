import "mocha";
import * as assert from 'assert';
import {BackwardStringByWord} from "../../05_BACKWARD_EACH_WORD";
import backwardStringByWord = BackwardStringByWord.backwardStringByWord;

describe('BackwardStringByWord', () => {

    it('backwardStringByWord', () => {

        assert.equal(backwardStringByWord(''), '');
        assert.equal(backwardStringByWord('world'), 'dlrow');
        assert.equal(backwardStringByWord('hello world'), 'olleh dlrow');
        assert.equal(backwardStringByWord('hello   world'), 'olleh   dlrow');
        assert.equal(backwardStringByWord('welcome to a game'), 'emoclew ot a emag');
    })
})
