// Facade Design Pattern -> The idea is to make it easy for you to chnage code in future.

async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return await res.json();
}

async function getUserPosts(userId) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );
  return await res.json();
}

getUsers().then((users) => {
  users.forEach((user) => {
    getUserPosts(user.id).then((posts) => {
      console.log(user.name);
      console.log(posts.length);
    });
  });
});

// Just shorten this code and create a FASCADE
