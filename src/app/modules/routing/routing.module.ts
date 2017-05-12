import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from '../../components/register/register.component';
import { ThanksComponent } from '../../components/thanks/thanks.component';


const routes: Routes = [
  { path: '', component: RegisterComponent },
  { path: 'thanks', component: ThanksComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class RoutingModule { }
