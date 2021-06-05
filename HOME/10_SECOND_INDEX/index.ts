export module SecondIndex {
    export function secondIndex(text: string, symbol: string): number | undefined {
        let output: number = text.indexOf(symbol, text.indexOf(symbol) + 1);
        return output < 0 ? undefined : output;
    }
}
