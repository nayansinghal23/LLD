export default class Ok {
    #message: string;

    constructor(message: string) {
        this.#message = message;
    }

    static of(message: string): Ok {
        return new Ok(message);
    }

    getMessage(): string {
        return this.#message;
    }
}