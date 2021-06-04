export module PopularWords {
    import Dict = NodeJS.Dict;

    export function popularWords(text: string, words: string[]): Dict<string> {
        let output: {} = {};

        words.forEach(word => {
            let regex: RegExp = new RegExp('\\b' + word + '\\b', 'gi');
            let arr: RegExpMatchArray | null = text.match(regex);

            if (arr) {
                // @ts-ignore
                output[word] = arr.length;
            } else {
                // @ts-ignore
                output[word] = 0;
            }
        })
        return output;
    }
}
