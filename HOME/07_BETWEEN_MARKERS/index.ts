export module BetweenMarkers {
    export function betweenMarkers(text: string, begin: string, end: string): string {
        return text.slice(
            text.indexOf(begin) === -1 ? 0 : text.indexOf(begin) + begin.length,
            text.indexOf(end) === -1 ? text.length : text.indexOf(end));
    }
}
