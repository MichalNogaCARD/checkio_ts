export module MostWanted {
    export function mostWanted(text: string): string {
        let letterQuantity = Array.from(text.toLowerCase().split('')
            .filter(letter => letter.match(/[a-z]/))
            .reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map))
            .sort((entry1, entry2) => entry2[1] - entry1[1]);

        let highestQuantity: number = letterQuantity.values().next().value[1];

        return letterQuantity.filter(entry => entry[1] === highestQuantity)
            .map(entry => entry[0])
            .sort()[0];
    }
}
