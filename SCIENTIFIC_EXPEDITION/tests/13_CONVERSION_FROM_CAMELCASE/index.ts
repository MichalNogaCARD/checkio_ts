import "mocha";
import * as assert from 'assert';
import {FromCamelCase} from "../../13_CONVERSION_FROM_CAMELCASE";
import fromCamelCase = FromCamelCase.fromCamelCase;

describe('FromCamelCase', () => {

    it('fromCamelCase', () => {

        assert.equal(fromCamelCase('MyFunctionName'), 'my_function_name');
        assert.equal(fromCamelCase('IPhone'), 'i_phone');
    })
})
