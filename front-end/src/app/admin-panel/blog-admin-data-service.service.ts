import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Blogpost } from '../blog/blogpost.model';
import { AuthenticationService } from '../user/authentication.service';

@Injectable()
export class BlogAdminDataService {
  private _appUrl = 'http://localhost:4200/API/blogposts';

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

  removeBlogpost(post): Observable<Blogpost> {
    return this.http.delete(`${this._appUrl}/${post.id}`).map(res => res.json()).map(item => Blogpost.fromJSON(item));
  }
}
