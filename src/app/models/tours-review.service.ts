import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  getReviewsForTour(tourId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/toursreview/${tourId}`);
  }

  addReviewTours(reviewData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/review`, reviewData);
  }
}