export module FromCamelCase {
    export function fromCamelCase(name: string): string {
        return name.match(/[A-Z]([a-z]+)?/g).join('_').toLowerCase();
    }
}
