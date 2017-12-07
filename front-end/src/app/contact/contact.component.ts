import { ValidateFn } from 'codelyzer/walkerFactory/walkerFn';
import { Contact } from './contact.model';
import { ContactDataService } from './contact-data-service.service';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

/*
// Doesn't work.
function checkEmailValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    // simple regex
    const regex = '^\S+@\S+$';
    const returnvalue = control.value.match(regex) ? null : {'emailNotValid': true};
    console.log(returnvalue);
    return returnvalue;
  };
}
*/

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [ ContactDataService ]
})

export class ContactComponent implements OnInit {
  public contact: FormGroup;
  public errorMessage: string;
  public successMessage: string;

  constructor(private fb: FormBuilder, private _contactDataService: ContactDataService) { }

  ngOnInit() {
    this.contact = this.fb.group({
      // email: ['', [Validators.required, checkEmailValidator()]],
      email: ['', Validators.required],
      subject: ['', [Validators.required]],
      body: ['',  [Validators.required]]
    });

    this.contact.statusChanges.debounceTime(400).distinctUntilChanged().subscribe();
  }

  get getContact(){
    return this.contact;
  }

  onSubmit() {
    const newcontact = new Contact(this.contact.value.email,
    this.contact.value.subject, this.contact.value.body);
    this._contactDataService.addContact(newcontact).subscribe( res => {
      if (res) {
        // if succesful, remove form and show succes message
        this.successMessage = 'Uw aanvraag werd verzonden';
      }
    }, err => this.errorMessage = err.json().message);
  }
}
