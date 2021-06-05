import "mocha";
import * as assert from 'assert';
import {AllTheSame} from "../../13_ALL_THE_SAME";
import allTheSame = AllTheSame.allTheSame;

describe('AllTheSame',()=>{

    it('allTheSame',()=>{

        assert.equal(allTheSame([1, 1, 1]), true)
        assert.equal(allTheSame([1, 2, 1]), false)
        assert.equal(allTheSame(['a', 'a', 'a']), true)
        assert.equal(allTheSame([]), true)
        assert.equal(allTheSame([1]), true)
    })
})
