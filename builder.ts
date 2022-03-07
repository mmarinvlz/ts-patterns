import { UserBuilder } from "./builder/UserBuilder";

console.log("/**********************************/ \n");

// With name
const userWithName = new UserBuilder().withName("Marco").build();
console.log(`User with name: ${JSON.stringify(userWithName)}`);

// With last name
const userWithLastName = new UserBuilder().withLastName("Marin").build();
console.log(`User with last name: ${JSON.stringify(userWithLastName)}`);

// User
const user = new UserBuilder()
  .withName("Marco")
  .withLastName("Marin")
  .withAge(28)
  .build();
console.log(`User: ${JSON.stringify(user)}`);

console.log("\n/**********************************/");
