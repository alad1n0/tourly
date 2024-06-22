import { Component } from '@angular/core';
import { UserService } from '../models/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  isSignUp: boolean = true;

  constructor(private userService: UserService, private router: Router) {}

  onRegister() {
    if (this.password !== this.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const userData = {
      name: this.name,
      email: this.email,
      password: this.password,
      password_confirmation: this.confirmPassword
    };

    this.userService.registerUser(userData).subscribe(
      response => {
        console.log('User registered successfully', response);
        localStorage.setItem('user', JSON.stringify(response.user));
        this.router.navigate(['/profile']);
      },
      error => {
        console.error('Registration failed', error);
      }
    );
  }

  onLogin() {
    const userData = {
      email: this.email,
      password: this.password
    };

    this.userService.loginUser(userData).subscribe(
      response => {
        console.log('User logged in successfully', response);
        localStorage.setItem('user', JSON.stringify(response.user));
        this.router.navigate(['/profile']);
      },
      error => {
        console.error('Login failed', error);
      }
    );
  }

  toggleSignUp(): void {
    this.isSignUp = true;
  }
  
  toggleSignIn(): void {
    this.isSignUp = false;
  }
}