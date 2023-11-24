type TUser = {
  id?: string;
  name: string;
  email: string;
  password?: string | null;
};

export class User {
  id?: string;
  name: string;
  email: string;
  password?: string | null;

  constructor({ id, name, email, password }: TUser) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
