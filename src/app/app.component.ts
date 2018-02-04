import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})

export class AppComponent {

  public outerClick: boolean = false;

  public innerClick: boolean = false;

  public outerClicked() {
    this.outerClick = true;
  }

  public innerClicked() {
    this.innerClick = true;
  }

  public reset() {
    this.outerClick = false;
    this.innerClick = false;
  }
}
