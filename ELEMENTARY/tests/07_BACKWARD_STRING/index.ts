import "mocha";
import * as assert from 'assert';
import {BackwardString} from "../../07_BACKWARD_STRING";
import backwardString = BackwardString.backwardString;

describe('BackwardString', () => {

    it('backwardString', () => {

        assert.equal(backwardString('val'), 'lav');
        assert.equal(backwardString(''), '');
        assert.equal(backwardString('ohho'), 'ohho');
        assert.equal(backwardString('123456789'), '987654321');
    })
})
