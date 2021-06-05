export module AllTheSame {
    export function allTheSame(elements: any[]): boolean {
        return elements.every(element => element === elements[0]);
    }
}
