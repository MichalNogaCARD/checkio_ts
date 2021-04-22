import "mocha";
import * as assert from 'assert';
import {AcceptablePassword} from "../../04_ACCEPTABLE_PASSWORD";
import isAcceptablePassword = AcceptablePassword.isAcceptablePassword;

describe('Acceptable Password', () => {

    it('acceptablePassword', () => {
        assert.equal(isAcceptablePassword('short'), false);
        assert.equal(isAcceptablePassword('muchlonger'), true);
        assert.equal(isAcceptablePassword('ashort'), false);
    })
})
