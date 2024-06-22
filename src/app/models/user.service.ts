import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  registerUser(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }

  loginUser(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, userData);
  }

  updateUser(userData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/user/${userData.id}`, userData);
  }

  checkUserExists(email: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/check-user-exists?email=${email}`);
  }
}