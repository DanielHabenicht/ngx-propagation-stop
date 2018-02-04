import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from 'app/app.component';
import { PropagationStopDirective } from 'app/directives/propagation-stop.directive';

@NgModule({
  declarations: [
    AppComponent,
    PropagationStopDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
