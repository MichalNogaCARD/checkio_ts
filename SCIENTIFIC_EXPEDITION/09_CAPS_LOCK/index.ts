export module CapsLock {
    export function capsLock(text: string): string {
        let capsLockOn: boolean = false;
        let output: string[] = [];

        for (let i = 0; i < text.length; i++) {
            if (text[i] === 'a') {
                capsLockOn = !capsLockOn;
                continue;
            }
            output.push(capsLockOn ? text[i].toUpperCase() : text[i]);
        }
        return output.join('');
    }
}
