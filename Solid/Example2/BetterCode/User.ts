export class User {
    #age: number = 0;

    constructor(age: number) {
        this.#age = age;
    }

    getAge(): number {
        return this.#age;
    }

    setAge(age: number) {
        this.#age = age;
    }
};