export module FirstWord {
    export function firstWord(text: string): string {
        // @ts-ignore
        return text.match(/([a-z']+)/i)[0];
    }
}
