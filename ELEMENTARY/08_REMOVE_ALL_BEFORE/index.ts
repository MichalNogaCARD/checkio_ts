export module RemoveAllBefore {
    export function removeAllBefore(values: number[], b: number): number[] {
        let index: number = values.indexOf(b);
        return index < 0 ? values : values.slice(index);
    }
}
