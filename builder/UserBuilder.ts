interface User {
  name: string;
  lastName: string;
  age: number;
}

export class UserBuilder {
  private readonly user: User;

  constructor() {
    this.user = {
      name: null,
      lastName: null,
      age: null,
    };
  }

  withName(name: string): UserBuilder {
    this.user.name = name;
    return this;
  }

  withLastName(lastName: string): UserBuilder {
    this.user.lastName = lastName;
    return this;
  }

  withAge(age: number): UserBuilder {
    this.user.age = age;
    return this;
  }

  build(): User {
    return this.user;
  }
}
