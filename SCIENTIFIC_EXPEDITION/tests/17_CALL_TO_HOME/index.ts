import "mocha";
import * as assert from 'assert';
import {TotalCost} from "../../17_CALL_TO_HOME";
import totalCost = TotalCost.totalCost;

describe('TotalCost', () => {

    it('totalCost', () => {

        assert.equal(totalCost(['2014-01-01 01:12:13 181',
            '2014-01-02 20:11:10 600',
            '2014-01-03 01:12:13 6009',
            '2014-01-03 12:13:55 200']), 124);
        assert.equal(totalCost(['2014-02-05 01:00:00 1',
            '2014-02-05 02:00:00 1',
            '2014-02-05 03:00:00 1',
            '2014-02-05 04:00:00 1']), 4);
        assert.equal(totalCost(['2014-02-05 01:00:00 60',
            '2014-02-05 02:00:00 60',
            '2014-02-05 03:00:00 60',
            '2014-02-05 04:00:00 6000']), 106);
    })
})
