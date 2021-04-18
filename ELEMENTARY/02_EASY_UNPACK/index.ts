export module EasyUnpack {

    export function easyUnpack(values: any[]): any [] {
        return [values[0], values[2], values[values.length - 2]]
    }
}
