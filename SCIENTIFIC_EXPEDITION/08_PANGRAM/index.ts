export module CheckPangram {
    export function checkPangram(text: string): boolean {
        let alphabet: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
        return alphabet.every(letter => text.toLowerCase().includes(letter));
    }
}
