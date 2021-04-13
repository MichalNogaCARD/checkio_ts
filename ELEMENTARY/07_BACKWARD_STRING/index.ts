export module BackwardString {
    export function backwardString(value: string): string {
        return Array.from(value).reverse().join('');
    }
}
