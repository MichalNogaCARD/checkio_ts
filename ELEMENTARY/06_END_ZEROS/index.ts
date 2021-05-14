export module EndZeros {
    export function endZeros(value: number): number {
        return value.toString().length - value.toString().replace(/0+$/, '').length;
    }
}
