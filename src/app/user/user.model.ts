export class User {
  constructor(
    public id: string,
    public username: string,
    public password: string,
    public status: string,
    public register_date: Date,
    public name: string,
    public surname: string,
    public email: string,
    public phone: string) {}
}
