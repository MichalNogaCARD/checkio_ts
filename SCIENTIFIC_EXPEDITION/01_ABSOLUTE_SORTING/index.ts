export module AbsoluteSorting {
    export function absoluteSorting(values: number[]): number[] {
        return values.sort((value1, value2) => Math.abs(value1) > Math.abs(value2) ? 1 : -1);
    }
}
