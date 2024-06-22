import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TourService {

  private apiUrl = 'http://127.0.0.1:8000/api/tours';

  constructor(private http: HttpClient) { }

  getTours(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getToursByCountry(country: string): Observable<any> {
    const url = `${this.apiUrl}?country=${country}`;
    return this.http.get<any>(url);
  } 

  getToursByCountryAndCity(country: string, city: string): Observable<any> {
    const url = `${this.apiUrl}?country=${country}&city=${city}`;
    return this.http.get<any>(url);
  }

  getToursByCountryCityAndHotel(country: string, city: string, hotel: string): Observable<any> {
    const url = `${this.apiUrl}?country=${country}&city=${city}&hotel=${hotel}`;
    return this.http.get<any>(url);
  }

  getToursByCountryCityHotelAndPeople(country: string, city: string, hotel: string, tourspeople: number): Observable<any> {
    const url = `${this.apiUrl}?country=${country}&city=${city}&hotel=${hotel}&tourspeople=${tourspeople}`;
    return this.http.get<any>(url);
  }

  getToursByCountryCityHotelPeopleAndDateFrom(country: string, city: string, hotel: string, tourspeople: number,  toursdatefrom: string): Observable<any> {
    const url = `${this.apiUrl}?country=${country}&city=${city}&hotel=${hotel}&tourspeople=${tourspeople}&toursdatefrom=${toursdatefrom}`;
    return this.http.get<any>(url);
  }

  getToursByCountryCityHotelPeopleDateFromAndDateTo(country: string, city: string, hotel: string, tourspeople: number,  toursdatefrom: string, toursdateto: string): Observable<any> {
    const url = `${this.apiUrl}?country=${country}&city=${city}&hotel=${hotel}&tourspeople=${tourspeople}&toursdatefrom=${toursdatefrom}&toursdateto=${toursdateto}`;
    return this.http.get<any>(url);
  }

  getTourById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}