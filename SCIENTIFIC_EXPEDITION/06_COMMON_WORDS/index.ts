export module CommonWords {
    export function commonWords(line1: string, line2: string): string {
        return [...line2.split(',')].filter(word => line1.includes(word)).sort((word1, word2) => word1 > word2 ? 1 : -1).join(',');
    }
}
