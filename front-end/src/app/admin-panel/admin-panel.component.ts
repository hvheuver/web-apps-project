import { BlogAdminDataService } from './blog-admin-data-service.service';
import { Component, OnInit } from '@angular/core';
import { BlogDataService } from '../blog/blog-data-service.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss'],
  providers: [
    BlogAdminDataService,
    BlogDataService]
})
export class AdminPanelComponent implements OnInit {

  private _posts;
  
    constructor(private _blogDataService: BlogDataService, private _blogAdminDataService: BlogAdminDataService) { }
  
    ngOnInit() {
      this._blogDataService.getBlogposts.subscribe(posts => this._posts = posts);
    }
  
    get blogposts(){
      return this._posts;
    }

}
