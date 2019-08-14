export class Errors {

  private static _required: string = 'Feld wird benötigt';
  private static _email: string = 'Ungültige E-Mail';

  constructor() { }

  public static get required(): string {
    return this._required;
  }

  public static get email(): string {
    return this._email;
  }

}