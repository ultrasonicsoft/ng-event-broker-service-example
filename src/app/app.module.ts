import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventBrokerModule } from 'ng-event-broker';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EventBrokerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
