import { Blogpost } from '../../blog/blogpost.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { BlogAdminDataService } from '../blog-admin-data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-blogpost',
  templateUrl: './add-blogpost.component.html',
  styleUrls: ['./add-blogpost.component.scss'],
  providers: [ BlogAdminDataService ]
})
export class AddBlogpostComponent implements OnInit {
  private post: FormGroup;

  constructor(private fb: FormBuilder, private _blogAdminDataService: BlogAdminDataService, private _router: Router) { }

  ngOnInit() {
    this.post = this.fb.group({
      title: ['', [Validators.required]],
      body: ['', [Validators.required]],
      imageUrl: ['', [Validators.required,
        Validators.pattern('https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)')]]
    });

    this.post.statusChanges.debounceTime(400).distinctUntilChanged().subscribe();
  }

  get getPost(){
    return this.post;
  }

  onSubmit() {
    const newpost = new Blogpost(this.post.value.title,
    this.post.value.body, this.post.value.imageUrl);
    this._blogAdminDataService.addBlogpost(newpost).subscribe();
    this._router.navigate(['admin']);
  }

}
