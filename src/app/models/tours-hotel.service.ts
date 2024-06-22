import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  private apiUrl = 'http://127.0.0.1:8000/api/hotels';

  constructor(private http: HttpClient) { }

  getHotelByCity(city: string): Observable<any> {
    const url = `${this.apiUrl}?city=${city}`;
    return this.http.get<any>(url);
  }
}