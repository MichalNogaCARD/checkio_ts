export module ReplaceFirst {

    export function replaceFirst(values: number[]): number[] {
        let firstElement: number = values.shift();
        if (firstElement) {
            values.push(firstElement);
        }
        return values;
    }
}
