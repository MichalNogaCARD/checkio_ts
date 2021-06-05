export module SumByTypes {
    export function sumByTypes(values: Array<number | string>): [string, number] {
        let allString: string = '';
        let allDigits: number = 0;

        values.forEach(value => typeof value === 'number' ? allDigits += value : allString += value);
        return [allString, allDigits];
    }
}
