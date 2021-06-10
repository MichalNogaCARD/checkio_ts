import "mocha";
import * as assert from 'assert';
import {FindMessage} from "../../15_SECRET_MESSAGE";
import findMessage = FindMessage.findMessage;

describe('FindMessage', () => {

    it('findMessage', () => {

        assert.equal(findMessage(('How are you? Eh, ok. Low or Lower? '
            + 'Ohhh.')), 'HELLO');
        assert.equal(findMessage('hello world!'), '');
        assert.equal(findMessage('HELLO WORLD!!!'), 'HELLOWORLD');
    })
})
