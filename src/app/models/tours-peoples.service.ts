import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private apiUrl = 'http://127.0.0.1:8000/api/tourspeoples';

  constructor(private http: HttpClient) { }

  getPeopleByHotel(hotel: string): Observable<any> {
    const url = `${this.apiUrl}?hotel=${hotel}`;
    return this.http.get<any>(url);
  }
}