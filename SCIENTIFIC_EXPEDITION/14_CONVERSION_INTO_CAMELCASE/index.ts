export module ToCamelCase {
    export function toCamelCase(name: string): string {
        return name.split('_').map(text => text[0].toUpperCase() + text.slice(1)).join("");
    }
}
