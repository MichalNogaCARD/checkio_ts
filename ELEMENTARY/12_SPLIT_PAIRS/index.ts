export module SplitPairs {
    export function splitPairs(text: string): string[] {
        let output: string[] = [];

        for (let i = 0; i < text.length; i++) {
            if (text[i + 1]) {
                output.push(text[i] + text[i + 1]);
            } else {
                output.push(text[i] + '_');
            }
            i++;
        }

        return output;
    }
}
