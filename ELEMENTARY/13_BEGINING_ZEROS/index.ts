export module BeginningZeros {
    export function beginningZeros(text: string): number {
        return text.length - text.replace(/^0+/, '').length;
    }
}
