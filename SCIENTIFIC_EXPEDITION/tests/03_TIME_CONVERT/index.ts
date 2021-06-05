import "mocha";
import * as assert from 'assert';
import {TimeConverter} from "../../03_TIME_CONVERT";
import timeConverter = TimeConverter.timeConverter;

describe('TimeConverter',()=>{

    it('timeConverter',()=>{

        assert.equal(timeConverter('12:30'), '12:30 p.m.')
        assert.equal(timeConverter('09:00'), '9:00 a.m.')
        assert.equal(timeConverter('23:15'), '11:15 p.m.')
    })
})
