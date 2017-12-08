import { Blogpost } from '../blog/blogpost.model';
import { BlogAdminDataService } from './blog-admin-data-service.service';
import { Component, OnInit } from '@angular/core';
import { BlogDataService } from '../blog/blog-data-service.service';
import { Router } from '@angular/router';

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
  
    constructor(private _blogDataService: BlogDataService, private _blogAdminDataService: BlogAdminDataService, private _router: Router) { }
  
    ngOnInit() {
      this._blogDataService.getBlogposts.subscribe(posts => this._posts = posts);
    }
  
    get blogposts(){
      return this._posts;
    }

    removePost(postid) {
      // id is return value of DELETE
      this._blogAdminDataService.removeBlogpost(postid).subscribe(id =>
        this._posts = this._posts.filter(val => {
          console.log(id + '   ' + val.id);
          return id !== val.id;
        })
      );
      this._router.navigate(['admin']);
    }

    editPost(postid) {
      this._router.navigate([`admin/editblog/${postid}`]);
    }
}
