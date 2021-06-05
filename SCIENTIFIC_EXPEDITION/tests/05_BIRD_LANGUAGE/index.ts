import "mocha";
import * as assert from 'assert';
import {Translate} from "../../05_BIRD_LANGUAGE";
import translate = Translate.translate;

describe('Translate', () => {

    it('translate', () => {

        assert.equal(translate('hieeelalaooo'), 'hello');
        assert.equal(translate('hoooowe yyyooouuu duoooiiine'), 'how you doin');
        assert.equal(translate('aaa bo cy da eee fe'), 'a b c d e f');
        assert.equal(translate('sooooso aaaaaaaaa'), 'sos aaa');
    })
})
