import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DateToService {

  private apiUrl = 'http://127.0.0.1:8000/api/toursdateto';

  constructor(private http: HttpClient) { }

  getDateTo(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getDateToByDateFrom (toursdatefrom: string): Observable<any> {
    const url = `${this.apiUrl}?toursdatefrom=${toursdatefrom}`;
    return this.http.get<any>(url);
  }
}