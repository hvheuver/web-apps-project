import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'angular4-carousel';

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
import { FooterComponent } from './footer/footer.component';
import { DetailblogComponent } from './blog/detailblog/detailblog.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    DetailblogComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    HttpModule,
    AppRoutingModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
