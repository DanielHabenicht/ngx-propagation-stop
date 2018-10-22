import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PropagationStopModule } from 'projects/ngx-propagation-stop/src/public_api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PropagationStopModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
