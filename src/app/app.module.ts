import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { MainpageComponent } from './component/mainpage/mainpage.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    MainpageComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
