import { User } from "./User";

export class UserManager {
    add(user: User) {
        if(user.getAge() < 18) {
            throw new Error('User is not adult');
        }
        console.log('User added successfully');
    }

    update(user: User) {
        if(user.getAge() < 18) {
            throw new Error('User is not adult');
        }
        console.log('User updated successfully');
    }

    getUser(user: User) {
        console.log("User returned : ", user);
    }
}