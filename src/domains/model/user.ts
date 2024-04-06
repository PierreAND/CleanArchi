export class UserModel {
  id: number;
  email: string;
  name: string;

  constructor(user: Partial<UserModel>) {
    Object.assign(this, user);
  }
}
