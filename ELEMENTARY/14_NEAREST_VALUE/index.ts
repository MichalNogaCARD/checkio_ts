export module NearestValue {
    export function nearestValue(values: number[], search: number): number {
        let distances: number[][] = [];

        for (let i = 0; i < values.length; i++) {
            distances.push([values[i], Math.abs(values[i] - search)])
        }

        distances.sort((a, b) => {
            if (a[1] < b[1]) {
                return -1
            } else if (a[1] > b[1]) {
                return 1
            } else {
                if (a[0] < b[0]) {
                    return -1
                } else if (a[0] > b[0]) {
                    return 1
                }
                return 0;
            }
        });
        return distances[0][0];
    }
}
