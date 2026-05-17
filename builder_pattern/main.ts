/**
 We want to create a User class with multiple attributes like firstName, lastName, email, age, password, etc. We also need to add a bunch of validation that might include a combination of 2 or more attributes.

 Solution - 1 => We can do validation in the constructor itself, but it can bloat the constructor. Also there might be certain attributes that are optional and we don't want to pass them to the constructor. Also, we have to remember the order of the attributes in the constructor.

 Solution - 2 => What if we create a map of attributes and pass them to the constructor. Builder class helps us to do that.
 */

import UserBuilder from "./Builder";

export default class Main {
  init() {
    const userBuilder = new UserBuilder()
    userBuilder
    .firstName("Nayan")
    .lastName("Singhal")
    .email("nayan@gmail.com")
    .age(24)
    .password("123456")
    .build();
    userBuilder.display();
  }
}

const main = new Main();
main.init();