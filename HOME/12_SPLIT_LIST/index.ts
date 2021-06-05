export module SplitList {
    export function splitList(values: number[]): number[][] {
        let middle: number = values.length % 2 === 0 ? values.length / 2 : Math.floor(values.length / 2) + 1;
        return [[...values.slice(0, middle)], [...values.slice(middle, values.length)]];
    }
}
