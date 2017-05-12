import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../../../environments/environment';

import { AngularFireDatabaseModule } from 'angularfire2/database';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  exports: [
    AngularFireModule,
    AngularFireDatabaseModule
  ],
  declarations: []
})
export class FirebaseModule { }
