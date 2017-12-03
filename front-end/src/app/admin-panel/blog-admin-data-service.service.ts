import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Blogpost } from '../blog/blogpost.model';

@Injectable()
export class BlogAdminDataService {
  private _appUrl = 'http://localhost:4200/API/blogposts';
  constructor(private http: Http) {
  }

  addBlogpost(newpost): Observable<Blogpost> {
    // Iterate over observable<T> and map to Observable<U>
    // map every response to a class
    return this.http.post(this._appUrl, newpost).map(response =>
      response.json()).map(
        post => new Blogpost(post.title, post.body, post.imageUrl)
      );
  }
}
