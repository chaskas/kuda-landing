import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, RouterOutlet } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase';

import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Person } from '../../model/person';
import { Business } from '../../model/business';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  persons: FirebaseListObservable<any>;
  businesses: FirebaseListObservable<any>;

  person: Person;
  business: Business;

  personForm: FormGroup;
  businessForm: FormGroup;

  file: any;
  downloadURL: string;

  progress: number = -1;

  file_name: string = "Sube tu Curriculum";

  constructor(
    private db: AngularFireDatabase,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.persons = db.list('/persons');
    this.businesses = db.list('/businesses');

    this.createPersonForm();
    this.createBusinessForm();
  }

  handleInput(e: any, input: any) : void {
    this.file = input.files[0];
    this.progress = 0;
    if(!this.file) {
      this.file_name = "Sube tu Curriculum";
      this.progress = -1;
    } else {
      this.file_name = this.file.name;
    }
  }

  submitPerson() {
    this.doUpload();
  }

  createBusiness() {
    this.businesses.push(this.businessForm.value);
    this.router.navigate(['thanks']);
  }

  private doUpload() : void {

    var storageRef = firebase.storage().ref();
    var uploadTask = storageRef.child('cvs/' + this.file.name).put(this.file);

    uploadTask.on('state_changed', (snapshot) => {
      this.progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
    }, function(error) {
      console.log('file upload error.');
    }, () => {
      this.downloadURL = uploadTask.snapshot.downloadURL;
      this.personForm.value['cvUrl'] = this.downloadURL;
      this.persons.push(this.personForm.value);
      this.router.navigate(['thanks']);
    });

  }

  private createPersonForm()
  {
    this.personForm = this.formBuilder.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      birthdate: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      country: ['', [Validators.required]],
      position: ['', [Validators.required]]
    });
  }

  private createBusinessForm()
  {
    this.businessForm = this.formBuilder.group({
      business: ['', [Validators.required]],
      type: ['', [Validators.required]],
      contact: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required]],
      city: ['', [Validators.required]],
      country: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

}
