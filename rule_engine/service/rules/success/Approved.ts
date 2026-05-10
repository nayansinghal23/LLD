export default class Approved {
    #message: string;

    constructor(message: string) {
        this.#message = message;
    }

    static of(message: string): Approved {
        return new Approved(message);
    }

    getMessage(): string {
        return this.#message;
    }
}