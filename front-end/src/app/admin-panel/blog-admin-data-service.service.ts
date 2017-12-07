import { Contact } from '../contact/contact.model';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Blogpost } from '../blog/blogpost.model';
import { AuthenticationService } from '../user/authentication.service';

@Injectable()
export class BlogAdminDataService {
  private _appUrl = 'http://localhost:4200/API/blogposts';
  private _appUrlbase = 'http://localhost:4200/API/';

  constructor(private http: Http, private auth: AuthenticationService) {
  }

  addBlogpost(newpost): Observable<Blogpost> {
    // Iterate over observable<T> and map to Observable<U>
    // map every response to a class
    return this.http.post(this._appUrl, newpost, { headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) }).map(response =>
      response.json()).map(
        post => Blogpost.fromJSON(post)
      );
  }

  editBlogpost(editpost): Observable<Blogpost> {
    return this.http.patch(`${this._appUrl}/${editpost.id}`,
    editpost, { headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) }).map(response =>
      response.json()).map(
        post => Blogpost.fromJSON(post)
      );
  }

  removeBlogpost(postid) {
    return this.http.delete(`${this._appUrl}/${postid}`,
    { headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) })
    .map(res => res.json());
  }

  getContactRequests() {
    return this.http.get(`${this._appUrlbase}/contactrequests`,
    { headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) })
    .map(res => res.json().map(
      request => Contact.fromJSON(request))
  );
  }

  removeContactRequest(requestid) {
    return this.http.delete(`${this._appUrlbase}/contactrequests/${requestid}`,
    { headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) })
    .map(res => res.json());
  }
}
