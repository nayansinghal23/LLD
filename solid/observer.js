// Observer Design Pattern -> As soon as message comes, devices like mail, slack gets notified or all people in groups are notified

class Group {
  constructor() {
    this.users = [];
  }

  subscribe(user) {
    this.users.push(user);
  }

  notify(message) {
    this.users.forEach((user) => {
      console.log(`User${user.userId} get new message : ${message}`);
    });
  }

  unsubscribe(unsubscribedUser) {
    this.users = this.users.filter(
      (user) => user.userId != unsubscribedUser.userId
    );
  }
}

class User {
  constructor(userId) {
    this.userId = userId;
  }
}

const group = new Group();

const user1 = new User(1);
const user2 = new User(2);
const user3 = new User(3);

group.subscribe(user1);
group.subscribe(user2);
group.subscribe(user3);

group.notify("A change occured!!");

group.unsubscribe(user2);

group.notify("Another change occured!!");
