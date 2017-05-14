import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MdCardModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { MdIconModule } from '@angular/material';
import { MdGridListModule } from '@angular/material';
import { MdTabsModule } from '@angular/material';
import { MdInputModule } from '@angular/material';
import { MdSelectModule } from '@angular/material';
import { MdAutocompleteModule } from '@angular/material';
import { MdProgressBarModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MdCardModule,
    MdButtonModule,
    MdIconModule,
    MdGridListModule,
    MdTabsModule,
    MdInputModule,
    MdSelectModule,
    MdAutocompleteModule,
    MdProgressBarModule
  ],
  exports: [
    BrowserAnimationsModule,
    MdCardModule,
    MdButtonModule,
    MdIconModule,
    MdGridListModule,
    MdTabsModule,
    MdInputModule,
    MdSelectModule,
    MdAutocompleteModule,
    MdProgressBarModule
  ],
  declarations: []
})
export class MaterialModule { }
