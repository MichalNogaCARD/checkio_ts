export module LongRepeat {
    export function longRepeat(line: string): number {
        let longestRepeat: number = 1;
        let tempLongest: number = 0;

        for (let i = 0; i < line.length; i++) {
            if (line[i] === line[i + 1]) {
                let tempChar: string = line[i];
                tempLongest = 1;
                i++;
                while (line[i] === tempChar) {
                    tempLongest++;
                    i++;
                }
            }
            if (tempLongest > longestRepeat) {
                longestRepeat = tempLongest
            }
            tempLongest = 0;
        }
        return line.length === 0 ? 0 : longestRepeat;
    }
}
