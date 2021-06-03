import "mocha";
import * as assert from 'assert';
import {CapsLock} from "../../09_CAPS_LOCK";
import capsLock = CapsLock.capsLock;

describe('CapsLock', () => {

    it('capsLock', () => {

        assert.equal(capsLock('Why are you asking me that?'), 'Why RE YOU sking me thT?');
        assert.equal(capsLock('Always wanted to visit Zambia.'), 'AlwYS Wnted to visit ZMBI.');
    })
})
