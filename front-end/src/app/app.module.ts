import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//materialize import
// https://github.com/InfomediaLtd/angular2-materialize
// install materialize-css and angular2-materialize
// import 'materialize-css';
// ------> https://stackoverflow.com/questions/44584557/integrate-materialize-in-a-angular2-project-with-webpack-and-scss
// ^best source
import {MaterializeModule} from 'angular2-materialize';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
