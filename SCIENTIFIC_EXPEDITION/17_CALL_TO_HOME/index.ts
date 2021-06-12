export module TotalCost {
    export function totalCost(a: string[]): number {
        return [...Array.from([...a]
            .map(line => line.split(' '))
            .reduce((acc, e) => acc.set(e[0], (acc.get(e[0]) || 0) +
                Number((Number(e[2])) % 60 === 0 ? Number(e[2]) / 60 : Math.floor(Number(e[2]) / 60) + 1)), new Map))]
            .map(entry => entry[1] <= 100 ? entry[1] : 100 + 2 * (entry[1] - 100))
            .reduce((prev, curr) => prev + curr, 0);
    }
}
