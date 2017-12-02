import { Component, OnInit } from '@angular/core';
import { BlogDataService } from './blog-data-service.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  providers: [BlogDataService]
})

export class BlogComponent implements OnInit {
  private _posts;

  constructor(private _blogDataService: BlogDataService) { }

  ngOnInit() {
    this._blogDataService.getBlogposts.subscribe(posts => this._posts = posts);
  }

  get blogposts(){
    return this._posts;
  }
}
