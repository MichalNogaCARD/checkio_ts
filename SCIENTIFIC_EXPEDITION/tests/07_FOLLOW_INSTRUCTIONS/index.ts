import "mocha";
import * as assert from 'assert';
import {Follow} from "../../07_FOLLOW_INSTRUCTIONS";
import follow = Follow.follow;

describe('Follow', () => {

    it('follow', () => {

        assert.deepEqual(follow('fflff'), [-1, 4]);
        assert.deepEqual(follow('ffrff'), [1, 4]);
        assert.deepEqual(follow('fblr'), [0, 0]);
    })
})
