import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../models/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;
  showProfile: boolean = true;
  showSettings: boolean = false;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
    if (!this.user || !this.user.email) {
      this.router.navigate(['/user']);
    }
  }

  logout(): void {
    localStorage.removeItem('user');
    this.router.navigate(['/user']);
  }

  updateProfile(): void {
    this.userService.updateUser(this.user).subscribe(
      response => {
        console.log('Profile updated successfully', response);
        this.user = response.user;
        localStorage.setItem('user', JSON.stringify(this.user));
        this.showProfile = true;
        this.showSettings = false;
      },
      error => {
        console.error('Failed to update profile', error);
      }
    );
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onload = () => {
      this.user.image = (reader.result as string).split(',')[1]; // Save the base64 part only
    };
    
    if (file) {
      reader.readAsDataURL(file);
    }
  }

  getImageUrl(): string {
    return this.user && this.user.image ? 'data:image/jpeg;base64,' + this.user.image : '';
  }
}