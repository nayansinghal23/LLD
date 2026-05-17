import User from "./User";

export default class UserBuilder {
  #firstName!: string;
  #lastName!: string;
  #email!: string;
  #age!: number;
  #password!: string;

  firstName(firstName: string) {
    this.#firstName = firstName;
    return this;
  }

  lastName(lastName: string) {
    this.#lastName = lastName;
    return this;
  }

  email(email: string) {
    this.#email = email;
    return this;
  }

  age(age: number) {
    this.#age = age;
    return this;
  }

  password(password: string) {
    this.#password = password;
    return this;
  }

  build(): User {
    return new User(this.#firstName, this.#lastName, this.#email, this.#age, this.#password);
  }

  display() {
    console.log(`FirstName: ${this.#firstName}, LastName: ${this.#lastName}, Email: ${this.#email}, Age: ${this.#age}, Password: ${this.#password}`);
  }
}
