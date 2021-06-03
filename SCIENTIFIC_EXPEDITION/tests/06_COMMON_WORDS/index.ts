import 'mocha';
import * as assert from 'assert';
import {CommonWords} from "../../06_COMMON_WORDS";
import commonWords = CommonWords.commonWords;

describe('CommonWords', () => {

    it('commonWords', () => {

        assert.equal(commonWords('hello,world', 'hello,earth'), 'hello');
        assert.equal(commonWords('one,two,three', 'four,five,six'), '');
        assert.equal(commonWords('one,two,three',
            'four,five,one,two,six,three'), 'one,three,two');
        assert.equal(commonWords('mega,cloud,two,website,final', 'window,penguin,literature,network,fun,cloud,final,sausage'),
            'cloud,final');
    })
})
