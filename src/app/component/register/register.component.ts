import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      // Add form controls with validation as per your user model
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', [Validators.required, Validators.required]],
      lastName: ['', [Validators.required, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      this.userService.register(this.registerForm.value).subscribe({
        next: (response) => {
          console.log('Registration successful', response);
          this.router.navigate(['/login'])
        },
        error: (error) => {
          console.error('Registration failed', error);
          // Handle errors, e.g., display error messages
        }
      });
    }
  }
}
