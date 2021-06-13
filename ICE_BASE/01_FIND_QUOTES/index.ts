export module FindQuotes {
    export function findQuotes(text: string): string[] {
        try {
            // @ts-ignore
            return text.match(/"([^"]*)"/g).map(element => element.replace(/["]/g, ''));
        } catch {
            return []
        }
    }
}
