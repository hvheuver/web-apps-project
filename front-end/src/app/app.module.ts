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
import { NavigationComponent } from './navigation/navigation.component';
import { BlogComponent } from './blog/blog.component';
import { AppRoutingComponent } from './app-routing/app-routing.component';
import { BeschrijfschietingComponent } from './beschrijfschieting/beschrijfschieting.component';
import { PuntenschietingComponent } from './puntenschieting/puntenschieting.component';
import { StaandeWipComponent } from './staande-wip/staande-wip.component';
import { WillemTellComponent } from './willem-tell/willem-tell.component';
import { BestuurComponent } from './bestuur/bestuur.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BlogComponent,
    AppRoutingComponent,
    BeschrijfschietingComponent,
    PuntenschietingComponent,
    StaandeWipComponent,
    WillemTellComponent,
    BestuurComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
