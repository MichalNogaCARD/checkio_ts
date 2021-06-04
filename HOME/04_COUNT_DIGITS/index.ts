export module CountDigits {
    export function countDigits(text: string): number {
        return text.replace(/[^\d]/g, '').split('').length;
    }
}
