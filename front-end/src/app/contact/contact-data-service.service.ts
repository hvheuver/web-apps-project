import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Contact } from './contact.model';

@Injectable()
export class ContactDataService {
  private _appUrl = 'http://localhost:4200/API/contact';

  constructor(private http: Http) { }

  addContact(newcontact): Observable<Contact> {
    return this.http.post(this._appUrl, newcontact).map( response =>
    response.json()).map(
      contact => Contact.fromJSON(contact)
    );
  }
}
