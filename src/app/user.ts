export interface User {
    name: string;
    city: string;
    account: {
        email: string;
        confirm: string;
    }
}
