import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LightNGSelectModule } from 'light-ng-select';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LightNGSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
