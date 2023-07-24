import User from "../interfaces/User";


export let Users: User[] = [
    {
        name:"ofek",
        email: "ofek1999@gmail.com",
        password: "ofek1234"
    },
    {
        name:"mosh",
        email: "nana2@gamil.com",
        password: "pas15151"
    }
];

export function findUser(userToCheck: User): boolean {
  let user = Users.find(
    (user) =>
      user.email == userToCheck.email && user.password == userToCheck.password
  );
  return user != undefined;
}