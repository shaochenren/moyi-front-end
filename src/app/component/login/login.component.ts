import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage: string = '';  // Added to store the login error message

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(
        response => {
          console.log('Login successful', response);
          this.router.navigate(['/mainpage']);
        },
        error => {
          console.error('Login failed', error);
          this.errorMessage = 'Login failed. Please check your username and password.';  // Set the error message on failure
        }
      );
    } else {
      this.errorMessage = 'Both fields are required.';  // Set error message if the form is not valid
    }
  }
}
