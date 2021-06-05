export module Translate {
    export function translate(text: string): string {
        let output: string = '';
        let words: string[] = text.split(' ');

        words.forEach(word => {
            for (let i = 0; i < word.length; i++) {
                if (word[i].match(/[^aeouiy]/)) {
                    output += word[i];
                    i++;
                } else if (text.match(/[aeouiy]/)) {
                    output += word[i];
                    i += 2;
                }
            }
            output += ' ';
        })
        return output.trimRight();
    }
}
