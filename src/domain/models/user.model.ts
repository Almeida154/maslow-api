type TUser = {
  id: number;
  name: string;
  email: string;
  password: string;
};

export class User {
  id: number;
  name: string;
  email: string;
  password: string;

  constructor({ id, name, email, password }: TUser) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
