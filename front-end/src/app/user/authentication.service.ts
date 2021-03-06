import { BehaviorSubject, Observable } from 'rxjs/Rx';
import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthenticationService {
  private _url = '/users';
  private _user$: BehaviorSubject<string>;

  public redirectUrl: string;

  constructor(private http: Http) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this._user$ = new BehaviorSubject<string>(
      currentUser && currentUser.username
    );
  }

  get user$(): BehaviorSubject<string> {
    return this._user$;
  }

  get token(): string {
    return JSON.parse(localStorage.getItem('currentUser')).token;
  }

  login(username: string, password: string): Observable<boolean> {
    return this.http.post(`${this._url}/login`,
    { username: username, password: password })
      .map(res => res.json()).map(res => {
        const token = res.token;
        if (token) {
          localStorage.setItem('currentUser',
            JSON.stringify({ username: username, token: token })
          );
          this._user$.next(username);
          return true;
        } else {
          return false;
        }
      });
  }

  register(username: string, password: string): Observable<boolean> {
    console.log(this.token);
    return this.http.post(`${this._url}/register`,
    { username: username, password: password}, { headers: new Headers({Authorization: `Bearer ${this.token}`}) })
      .map(res => res.json()).map(res => {
        const token = res.token;
        if (token) {
          // check if there is a token, but don't do anything with it.
          return true;
        } else {
          return false;
        }
      });
  }

  logout() {
    if (this.user$.getValue()) {
      localStorage.removeItem('currentUser');
      // could result in change detection chain errors
      // change value on next job queue tick
      setTimeout(() => this._user$.next(null));
    }
  }


  checkUserNameAvailability(username: string): Observable<boolean> {
    return this.http.post(`${this._url}/checkusername`, { username: username }).map(res => res.json())
    .map(item => {
      if (item.username === 'alreadyexists') {
        return false;
      } else {
        return true;
      }
    });
  }
}
