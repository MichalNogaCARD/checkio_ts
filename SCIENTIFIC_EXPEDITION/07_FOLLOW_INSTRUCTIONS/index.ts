export module Follow {
    export function follow(instructions: string): [number, number] {
        let coordinates: [number, number] = [0, 0];

        [...instructions.split('')].forEach(instruction => {
            switch (instruction) {
                case 'f':
                    coordinates = [coordinates[0], coordinates[1] + 1];
                    break
                case 'b':
                    coordinates = [coordinates[0], coordinates[1] - 1];
                    break
                case 'l':
                    coordinates = [coordinates[0] - 1, coordinates[1]];
                    break
                case 'r':
                    coordinates = [coordinates[0] + 1, coordinates[1]];
                    break
            }
        })

        return coordinates;
    }
}
