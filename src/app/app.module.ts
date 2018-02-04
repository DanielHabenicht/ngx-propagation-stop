import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from 'app/app.component';
import { ClickStopPropagationDirective } from 'app/directives/click-stop-propagation.directive';

@NgModule({
  declarations: [
    AppComponent,
    ClickStopPropagationDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
