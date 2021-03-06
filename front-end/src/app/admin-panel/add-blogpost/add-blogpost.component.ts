import { Blogpost } from '../../blog/blogpost.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { BlogAdminDataService } from '../blog-admin-data-service.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { BlogDataService } from '../../blog/blog-data-service.service';

@Component({
  selector: 'app-add-blogpost',
  templateUrl: './add-blogpost.component.html',
  styleUrls: ['./add-blogpost.component.scss'],
  providers: [ BlogAdminDataService]
})
export class AddBlogpostComponent implements OnInit {
  private _post: Blogpost;
  public post: FormGroup;
  public errorMsg: string;
  public edit: Boolean;

  constructor(private route: ActivatedRoute, private fb: FormBuilder,
    private _blogAdminDataService: BlogAdminDataService, private _router: Router) { }

  ngOnInit() {
    this.route.data.subscribe(item => this._post = item['post']);
    if (this._post) {
      this.edit = true;
      // edit post
      this.post = this.fb.group({
        title: [this._post.title, [Validators.required]],
        body: [this._post.body, [Validators.required]],
        imageUrl: [this._post.imageUrl, [Validators.required]]
      });
    } else {
      // new post
      this.post = this.fb.group({
        title: ['', [Validators.required]],
        body: ['', [Validators.required]],
        imageUrl: ['', [Validators.required]]
      });
    }
    this.post.statusChanges.debounceTime(400).distinctUntilChanged().subscribe();
  }

  get getPost(){
    return this.post;
  }

  onSubmit() {
    const newpost = new Blogpost(this.post.value.title,
    this.post.value.body, this.post.value.imageUrl);
    if (this.edit) {
      // patch
      newpost.id = this._post.id;
      this._blogAdminDataService.editBlogpost(newpost).subscribe(res => {
        if (res) {
          this._router.navigate(['admin']);
        }}, err => this.errorMsg = err.json().message);
    } else {
      // post
      this._blogAdminDataService.addBlogpost(newpost).subscribe(res => {
        if (res) {
          this._router.navigate(['admin']);
        }}, err => this.errorMsg = err.json().message);
    }
  }

}
