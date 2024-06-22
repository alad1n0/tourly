import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../models/user.service';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) {}

  canActivate(): Observable<boolean> | boolean {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user && user.email) {
      return this.userService.checkUserExists(user.email).pipe(
        map(response => {
          if (response.exists) {
            return true;
          } else {
            localStorage.removeItem('user');
            this.router.navigate(['/user']);
            return false;
          }
        }),
        catchError(error => {
          console.error('Error checking user existence', error);
          localStorage.removeItem('user');
          this.router.navigate(['/user']);
          return of(false);
        })
      );
    } else {
      this.router.navigate(['/user']);
      return false;
    }
  }
}