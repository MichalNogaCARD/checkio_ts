export module FirstWord {
    export function firstWord(text: string): string {
        return text.match(/([a-z']+)/i)[0];
    }
}
