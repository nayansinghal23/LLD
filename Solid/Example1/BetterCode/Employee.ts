// Solution - We have segregated the classes in such a way that every class has now only & only 1 reason to change, thus obeying SRP.

export class Employee {
    #id: number = 0;
    #name: string = '';
    #address: string = '';

    constructor(id: number, name: string, address: string) {
        this.#id = id;
        this.#name = name;
        this.#address = address;
    }

    getEmployeeId(): number {
        return this.#id;
    }

    getEmployeeName(): string {
        return this.#name;
    }

    getEmployeeAddress(): string {
        return this.#address;
    }

    setEmployeeId(id: number) {
        this.#id = id;
    }

    setEmployeeName(name: string) {
        this.#name = name;
    }

    setEmployeeAddress(address: string) {
        this.#address = address;
    }
}