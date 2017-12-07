import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BlogAdminDataService } from '../blog-admin-data-service.service';

@Component({
  selector: 'app-contact-requests',
  templateUrl: './contact-requests.component.html',
  styleUrls: ['./contact-requests.component.scss'],
  providers: [
    BlogAdminDataService
  ]
})
export class ContactRequestsComponent implements OnInit {
  private _requests;

  constructor(private _blogAdminDataService: BlogAdminDataService, private _router: Router) { }

  ngOnInit() {
    this._blogAdminDataService.getContactRequests().subscribe(
      requests => this._requests = requests);
  }

  get requests(){
    return this._requests;
  }

  removeRequest(requestid) {
    this._blogAdminDataService.removeContactRequest(requestid).subscribe(id =>
    this._requests = this._requests.filter(val => {
      return id !== val.id;
    })
  );
  }
}
