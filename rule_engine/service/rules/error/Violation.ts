export default class Violation {
    #message: string;

    constructor(message: string) {
        this.#message = message;
    }

    static of(message: string): Violation {
        return new Violation(message);
    }
    // static methods are defined on the class itself, not on the instance

    getMessage(): string {
        return this.#message;
    }
};