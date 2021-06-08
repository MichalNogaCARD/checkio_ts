import "mocha";
import * as assert from 'assert';
import {MostWanted} from "../../10_THE_MOST_WANTED_LETTER";
import mostWanted = MostWanted.mostWanted;

describe('MostWanted', () => {

    it('mostWanted', () => {

        assert.equal(mostWanted('Hello World!'), 'l');
        assert.equal(mostWanted('How do you do?'), 'o');
        assert.equal(mostWanted('One'), 'e');
        assert.equal(mostWanted('Oops!'), 'o');
        assert.equal(mostWanted('AAaooo!!!!'), 'a');
        assert.equal(mostWanted('abe'), 'a');
    })
})
