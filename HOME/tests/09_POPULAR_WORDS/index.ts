import "mocha";
import * as assert from 'assert';
import {PopularWords} from "../../09_POPULAR_WORDS";
import popularWords = PopularWords.popularWords;

describe('PopularWords', () => {

        it('popularWords', () => {

            assert.deepEqual(popularWords(`
                    When I was One
                    I had just begun
                    When I was Two
                    I was nearly new`, ['i', 'was', 'three', 'near']), {
                    'i': 4,
                    'was': 3,
                    'three': 0,
                    'near': 0
                }
            )
        });
    }
)

