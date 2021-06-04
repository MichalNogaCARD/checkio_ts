export module BetweenMarkers {
    export function betweenMarkers(line: string, left: string, right: string): string {

        let withoutLeft = line.substring(line.indexOf(left) + 1);
        return withoutLeft.substring(0, withoutLeft.indexOf(right));
    }
}
