export module NonUniqueElements {
    export function nonUniqueElements(data: number[]): number[] {
        return data.filter(value => data.indexOf(value) !== data.lastIndexOf(value));
    }
}
