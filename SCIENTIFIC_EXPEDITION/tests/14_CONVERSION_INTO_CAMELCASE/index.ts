import "mocha";
import * as assert from 'assert';
import {ToCamelCase} from "../../14_CONVERSION_INTO_CAMELCASE";
import toCamelCase = ToCamelCase.toCamelCase;

describe('ToCamelCase', () => {

    it('toCamelCase', () => {

        assert.equal(toCamelCase('my_function_name'), 'MyFunctionName');
        assert.equal(toCamelCase('i_phone'), 'IPhone');
    })
})
