export default class Rejected {
    #message: string;

    constructor(message: string) {
        this.#message = message;
    }

    static of(message: string): Rejected {
        return new Rejected(message);
    }

    getMessage(): string {
        return this.#message;
    }
}