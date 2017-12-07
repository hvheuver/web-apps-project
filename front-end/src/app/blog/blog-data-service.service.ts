import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Blogpost } from './blogpost.model';

@Injectable()
export class BlogDataService {
  private _appUrl = 'http://localhost:4200/API/blogposts';
  constructor(private http: Http) {
  }

  get getBlogposts(): Observable<Blogpost[]>{
    // Iterate over observable<T> and map to Observable<U>
    // map every response to a class
    return this.http.get(this._appUrl).map(response =>
      response.json().map(
        post => Blogpost.fromJSON(post))
    );
  }

  getPost(id): Observable<Blogpost>{
    return this.http.get(`${this._appUrl}/recipe/${id}`)
    .map(response => response.json()).map(item => Blogpost.fromJSON(item));
  }
}
