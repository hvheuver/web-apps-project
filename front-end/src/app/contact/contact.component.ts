import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms/src/model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public contact: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log();
  }
}
