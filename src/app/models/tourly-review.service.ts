import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TourlyReiviewService {

  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  getTourlyReiview(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/tourlyreviews`);
  }

  addReview(reviewData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/tourlyreviews`, reviewData);
  }
}