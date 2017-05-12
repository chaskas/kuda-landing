import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, RouterOutlet } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database';

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

  createPerson() {
    this.persons.push(this.personForm.value);
    this.router.navigate(['thanks']);
  }

  createBusiness() {
    this.businesses.push(this.businessForm.value);
    this.router.navigate(['thanks']);
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
