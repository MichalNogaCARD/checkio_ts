import "mocha";
import * as assert from 'assert';
import {CorrectSentence} from "../../16_CORRECT_SENTENCE";
import correctSentence = CorrectSentence.correctSentence;

describe('CorrectSentence', () => {

    it('correctSentence',()=>{

        assert.equal(correctSentence('greetings, friends'), 'Greetings, friends.');
        assert.equal(correctSentence('Greetings, friends'), 'Greetings, friends.');
        assert.equal(correctSentence('Greetings, friends.'), 'Greetings, friends.');
    })
})
