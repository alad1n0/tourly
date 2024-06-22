import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private apiUrl = 'http://127.0.0.1:8000/api/cities';

  constructor(private http: HttpClient) { }

  getCityByCountry(country: string): Observable<any> {
    const url = `${this.apiUrl}?country=${country}`;
    return this.http.get<any>(url);
  }
}