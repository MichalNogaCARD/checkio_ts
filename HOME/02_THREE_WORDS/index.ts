export module ThreeWords {
    export function threeWords(text: string): boolean {
        let counter: number = 0;
        let words: string[] = [...text.split(/\s/)];

        for (let word of words) {
            if (word.toLowerCase().match(/^[a-z]+$/)) {
                counter++
                if (counter >= 3) {
                    return true;
                }
            } else {
                counter = 0;
            }
        }
        return false;
    }
}
