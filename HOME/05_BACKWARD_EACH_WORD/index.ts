export module BackwardStringByWord {
    export function backwardStringByWord(text: string): string {
        return [...text.split(/\s/).map(value => value.split('').reverse().join(''))].join(' ');
    }
}
