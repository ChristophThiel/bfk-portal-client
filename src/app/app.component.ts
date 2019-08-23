import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slider } from './core/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    slider
  ]
})
export class AppComponent {

  constructor() { }

  public prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
