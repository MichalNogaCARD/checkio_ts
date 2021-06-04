export module BiggerPrice {

    interface Stock {
        name: string,
        price: number
    }

    export function biggerPrice(limit: number, data: Stock[]): Stock[] {
        return data.sort((good1, good2) => good1.price > good2.price ? -1 : 1).splice(0, limit);
    }
}
