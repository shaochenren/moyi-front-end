import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./component/login/login.component";
import {RegisterComponent} from "./component/register/register.component";
import{MainpageComponent} from "./component/mainpage/mainpage.component";

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'mainpage', component: MainpageComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
