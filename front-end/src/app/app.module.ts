import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// materialize import
// https://github.com/InfomediaLtd/angular2-materialize
// install materialize-css and angular2-materialize
// import 'materialize-css';
// ------> https://stackoverflow.com/questions/44584557/integrate-materialize-in-a-angular2-project-with-webpack-and-scss
// ^best source
import {MaterializeModule} from 'angular2-materialize';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutingModule } from './app-routing/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
