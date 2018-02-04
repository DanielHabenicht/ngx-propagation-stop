import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from 'app/app.component';
import { StopPropagationDirective } from 'app/directives/stop-propagation.directive';

@NgModule({
  declarations: [
    AppComponent,
    StopPropagationDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
