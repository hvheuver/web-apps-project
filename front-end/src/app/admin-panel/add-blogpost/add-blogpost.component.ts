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
  private edit: Boolean;

  constructor(private route: ActivatedRoute, private fb: FormBuilder,
    private _blogAdminDataService: BlogAdminDataService, private _router: Router) { }

  ngOnInit() {
    this.route.data.subscribe(item => this._post = item['post']);
    this.post = this.fb.group({
      title: ['', [Validators.required]],
      body: ['', [Validators.required]],
      imageUrl: ['', [Validators.required]]
    });

    this.post.statusChanges.debounceTime(400).distinctUntilChanged().subscribe();
  }

  get getPost(){
    return this.post;
  }

  onSubmit() {
    const newpost = new Blogpost(this.post.value.title,
    this.post.value.body, this.post.value.imageUrl);
    this._blogAdminDataService.addBlogpost(newpost).subscribe(res => {
    if (res) {
      this._router.navigate(['admin']);
    }}, err => this.errorMsg = err.json().message);
  }

}
