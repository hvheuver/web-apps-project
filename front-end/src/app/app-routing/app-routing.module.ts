import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule} from 'angular2-materialize';
import { CanActivate, RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BlogDataService } from '../blog/blog-data-service.service';
import { BlogResolver } from '../blog/blog-resolver.services';
import { BlogAdminDataService } from '../admin-panel/blog-admin-data-service.service';
// public components
import { AppComponent } from '../app.component';
import { BlogComponent } from '../blog/blog.component';
import { BeschrijfschietingComponent } from '../beschrijfschieting/beschrijfschieting.component';
import { PuntenschietingComponent } from '../puntenschieting/puntenschieting.component';
import { StaandeWipComponent } from '../staande-wip/staande-wip.component';
import { WillemTellComponent } from '../willem-tell/willem-tell.component';
import { BestuurComponent } from '../bestuur/bestuur.component';
import { ContactComponent } from '../contact/contact.component';
import { NotFoundComponent } from '../not-found/not-found.component';
// specifiec user/admin related components
import { RegisterComponent } from '../user/register/register.component';
import { LoginComponent } from '../user/login/login.component';
import { AddBlogpostComponent } from '../admin-panel/add-blogpost/add-blogpost.component';
import { AdminPanelComponent } from '../admin-panel/admin-panel.component';
import { AuthGuardService } from '../user/auth-guard.service';
import { AuthenticationService } from '../user/authentication.service';
import { ContactRequestsComponent } from '../admin-panel/contact-requests/contact-requests.component';

const appRoutes: Routes = [
    {path: '', redirectTo: 'blog', pathMatch: 'full'},
    {path: 'blog', component: BlogComponent },
    {path: 'beschrijfschieting', component: BeschrijfschietingComponent},
    {path: 'puntenschieting', component: PuntenschietingComponent},
    {path: 'staandewip', component: StaandeWipComponent},
    {path: 'willemtell', component: WillemTellComponent},
    {path: 'bestuur', component: BestuurComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'admin', canActivate: [ AuthGuardService], component: AdminPanelComponent },
    {path: 'admin/addblog', canActivate: [ AuthGuardService], component: AddBlogpostComponent },
    {path: 'admin/editblog/:id', canActivate: [AuthGuardService], component: AddBlogpostComponent,
      resolve: {post: BlogResolver}},
    {path: 'admin/contactrequest', canActivate: [AuthGuardService], component: ContactRequestsComponent},
    {path: 'user', loadChildren: 'app/user/user.module#UserModule'},
    {path: '**', component: NotFoundComponent }
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
    NotFoundComponent,
    AdminPanelComponent,
    AddBlogpostComponent,
    ContactRequestsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterializeModule,
    RouterModule.forRoot(
        appRoutes
        ),
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthenticationService,
    AuthGuardService,
    BlogResolver,
    BlogDataService,
    BlogAdminDataService
  ],
  bootstrap: [AppComponent]
})
export class AppRoutingModule { }
