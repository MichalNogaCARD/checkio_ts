export module GoesAfter {
    export function goesAfter(word: string, first: string, second: string): boolean {
        return word.indexOf(first) >= 0 && word.indexOf(second) >= 0 ? word.indexOf(first) + 1 === word.indexOf(second) : false;
    }
}
