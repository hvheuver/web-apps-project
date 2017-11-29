import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule} from 'angular2-materialize';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from '../app.component';
import { BlogComponent } from '../blog/blog.component';
import { BeschrijfschietingComponent } from '../beschrijfschieting/beschrijfschieting.component';
import { PuntenschietingComponent } from '../puntenschieting/puntenschieting.component';
import { StaandeWipComponent } from '../staande-wip/staande-wip.component';
import { WillemTellComponent } from '../willem-tell/willem-tell.component';
import { BestuurComponent } from '../bestuur/bestuur.component';
import { ContactComponent } from '../contact/contact.component';
import { NotFoundComponent } from '../not-found/not-found.component';

const appRoutes: Routes = [
    {path: '', redirectTo: 'blog', pathMatch: 'full'},
    {path: 'beschrijfschieting', component: BeschrijfschietingComponent},
    {path: 'puntenschieting', component: PuntenschietingComponent},
    {path: 'staandewip', component: StaandeWipComponent},
    {path: 'willemtell', component: WillemTellComponent},
    {path: 'bestuur', component: BestuurComponent},
    {path: 'contact', component: ContactComponent},
    { path: '**', component: NotFoundComponent }
];


@NgModule({
  declarations: [
    BlogComponent,
    BeschrijfschietingComponent,
    PuntenschietingComponent,
    StaandeWipComponent,
    WillemTellComponent,
    BestuurComponent,
    ContactComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    RouterModule.forRoot(
        appRoutes
        ),
  ],
  exports: [
      RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppRoutingModule { }
