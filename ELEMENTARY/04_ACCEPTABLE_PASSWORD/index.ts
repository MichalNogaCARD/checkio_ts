export module AcceptablePassword {

    export function isAcceptablePassword(password: string): boolean {
        return password.length > 6;
    }

}
