import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  @Output()
  public loggedIn = new EventEmitter<boolean>();

  public visible: boolean;

  constructor() {
    this.visible = false;
  }

  public login(): void {
    this.loggedIn.emit(true);
  }

  public toggleVisibility(): void {
    this.visible = !this.visible;
  }

}
