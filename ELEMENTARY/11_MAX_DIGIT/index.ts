export module MaxDigit {

    export function maxDigit(value: number): number {
        return Array.from(value.toString()).map(value => parseInt(value)).sort((a, b) => b - a)[0];
    }
}
