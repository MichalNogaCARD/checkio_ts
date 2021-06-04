export module SumNumbers {
    export function sumNumbers(test: string): number {
        let digits: number[] = [...test.split(/\s/).filter(value => value.match(/^[0-9]+$/)).map(value => Number(value))];
        return digits.reduce((v1, v2) => v1 + v2, 0);
    }
}
