import "mocha";
import * as assert from 'assert';
import {SecondIndex} from "../../10_SECOND_INDEX";
import secondIndex = SecondIndex.secondIndex;

describe('SecondIndex',()=>{

    it('secondIndex',()=>{

        assert.equal(secondIndex("sims", "s"), 3)
        assert.equal(secondIndex("find the river", "e"), 12)
        assert.equal(secondIndex("hi", " "), undefined)
        assert.equal(secondIndex("hi mayor", " "), undefined)
        assert.equal(secondIndex("hi mr Mayor", " "), 5)
    })
})
