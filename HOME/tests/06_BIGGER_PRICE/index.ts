import "mocha";
import * as assert from 'assert';
import {BiggerPrice} from "../../06_BIGGER_PRICE";
import biggerPrice = BiggerPrice.biggerPrice;

describe('BiggerPrice', () => {

    it('biggerPrice', () => {

        console.log(biggerPrice(2, [
            {"name": "bread", "price": 100},
            {"name": "wine", "price": 138},
            {"name": "meat", "price": 15},
            {"name": "water", "price": 1}
        ]))

        assert.deepEqual(biggerPrice(2, [
            {"name": "bread", "price": 100},
            {"name": "wine", "price": 138},
            {"name": "meat", "price": 15},
            {"name": "water", "price": 1}
        ]), [
            {"name": "wine", "price": 138},
            {"name": "bread", "price": 100}
        ])
        assert.deepEqual(biggerPrice(1, [
            {"name": "pen", "price": 5},
            {"name": "whiteboard", "price": 170}
        ]), [{"name": "whiteboard", "price": 170}])
    })
})
