export module AllTheSame {
    export function allTheSame(elements: any[]): boolean {

        for (let i = 0; i < elements.length; i++) {
            if (elements[0] !== elements[i]) {
                return false;
            }
        }
        return true;
    }
}
