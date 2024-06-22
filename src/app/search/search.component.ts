import { Component, OnInit } from '@angular/core';
import { TourService } from '../models/tours.service';
import { CountryService } from '../models/tours-country.service';
import { CityService } from '../models/tours-city.service';
import { HotelService } from '../models/tours-hotel.service';
import { PeopleService } from '../models/tours-peoples.service';
import { DateFromService } from '../models/tours-datefrom.service';
import { DateToService } from '../models/tours-dateto.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  toursCards: any[] = [];
  countryTours: any[] = [];
  cities: any[] = [];
  hotels: any[] = [];
  peoples: any[] = [];
  datefroms: any[] = [];
  datetos: any[] = [];
  selectedCountry: string = '';
  selectedCity: string = '';
  selectedHotel: string = '';
  selectedPeople: number | string = ''; 
  selectedDateFrom: string = '';
  selectedDateTo: string = '';

  constructor(
    private tourService: TourService,
    private countryService: CountryService,
    private cityService: CityService, 
    private hotelService: HotelService,
    private peopleService: PeopleService,
    private dateFromService: DateFromService,
    private dateToService: DateToService
  ) { }

  ngOnInit(): void {
    this.loadInitialData();
  }

  loadInitialData(): void {
    this.countryService.getCountryTours().subscribe(
      data => this.countryTours = data.countries,
      error => console.error('Error fetching countries: ', error)
    );

    this.loadAllTours();
  }

  loadAllTours(): void {
    this.tourService.getTours().subscribe(
      data => this.toursCards = data.tours,
      error => console.error('Error fetching tours: ', error)
    );
  }

  onCountryChange(): void {
    this.cityService.getCityByCountry(this.selectedCountry).subscribe(
      data => {
        this.cities = data.cities;
        this.resetSelection(['selectedCity', 'selectedHotel', 'selectedPeople', 'selectedDateFrom', 'selectedDateTo']);
      },
      error => console.error('Error fetching cities: ', error)
    );
  }

  onCityChange(): void {
    this.hotelService.getHotelByCity(this.selectedCity).subscribe(
      data => {
        this.hotels = data.hotels;
        this.resetSelection(['selectedHotel', 'selectedPeople', 'selectedDateFrom', 'selectedDateTo']);
      },
      error => console.error('Error fetching hotels: ', error)
    );
  }

  onHotelChange(): void {
    this.peopleService.getPeopleByHotel(this.selectedHotel).subscribe(
      data => {
        this.peoples = data.tourspeoples;
        this.resetSelection(['selectedPeople', 'selectedDateFrom', 'selectedDateTo']);
      },
      error => console.error('Error fetching people: ', error)
    );
  }

  onPeopleChange(): void {
    this.dateFromService.getDateFromByHotel(this.selectedHotel).subscribe(
      data => {
        this.datefroms = data.toursdatefrom;
        this.resetSelection(['selectedDateFrom', 'selectedDateTo']);
      },
      error => console.error('Error fetching date from: ', error)
    );
  }

  onDateFromChange(): void {
    this.dateToService.getDateTo().subscribe(
      data => {
        this.datetos = data.toursdateto;
        this.resetSelection(['selectedDateTo']);
      },
      error => console.error('Error fetching date from: ', error)
    );
  }

  onDateToChange(): void {
    this.dateToService.getDateToByDateFrom(this.selectedDateFrom).subscribe(
      data => {
        this.datetos = data.toursdateto;
      },
      error => console.error('Error fetching tours: ', error)
    );
  }

  filterTours(): void {
    if (this.selectedCountry && !this.selectedCity && !this.selectedHotel && !this.selectedDateFrom && !this.selectedDateTo && !this.selectedPeople) {
      this.tourService.getToursByCountry(this.selectedCountry).subscribe(
        data => this.toursCards = data.tours,
        error => console.error('Error filtering tours: ', error)
      );
    } else if (this.selectedCountry && this.selectedCity && !this.selectedHotel && !this.selectedPeople && !this.selectedDateFrom && !this.selectedDateTo) {
      this.tourService.getToursByCountryAndCity(this.selectedCountry, this.selectedCity).subscribe(
        data => this.toursCards = data.tours,
        error => console.error('Error filtering tours: ', error)
      );
    } else if (this.selectedCountry && this.selectedCity && this.selectedHotel && !this.selectedPeople && !this.selectedDateFrom && !this.selectedDateTo) {
      this.tourService.getToursByCountryCityAndHotel(this.selectedCountry, this.selectedCity, this.selectedHotel).subscribe(
        data => this.toursCards = data.tours,
        error => console.error('Error filtering tours: ', error)
      );
    } else if (this.selectedCountry && this.selectedCity && this.selectedHotel && this.selectedPeople && !this.selectedDateFrom && !this.selectedDateTo) {
      this.tourService.getToursByCountryCityHotelAndPeople(this.selectedCountry, this.selectedCity, this.selectedHotel, Number(this.selectedPeople)).subscribe(
        data => this.toursCards = data.tours,
        error => console.error('Error filtering tours: ', error)
      );
    } else if (this.selectedCountry && this.selectedCity && this.selectedHotel && this.selectedPeople && this.selectedDateFrom && !this.selectedDateTo) {
      this.tourService.getToursByCountryCityHotelPeopleAndDateFrom(this.selectedCountry, this.selectedCity, this.selectedHotel, Number(this.selectedPeople), this.selectedDateFrom).subscribe(
        data => this.toursCards = data.tours,
        error => console.error('Error filtering tours: ', error)
      );
    } else if (this.selectedCountry && this.selectedCity && this.selectedHotel && this.selectedPeople && this.selectedDateFrom && this.selectedDateTo) {
      this.tourService.getToursByCountryCityHotelPeopleDateFromAndDateTo(this.selectedCountry, this.selectedCity, this.selectedHotel, Number(this.selectedPeople), this.selectedDateFrom, this.selectedDateTo).subscribe(
        data => this.toursCards = data.tours,
        error => console.error('Error filtering tours: ', error)
      );
    } else {
      this.loadAllTours();
    }
  }

  resetFilter(): void {
    this.resetSelection(['selectedCountry', 'selectedCity', 'selectedHotel', 'selectedPeople', 'selectedDateFrom', 'selectedDateTo']);
    this.cities = [];
    this.hotels = [];
    this.peoples = [];
    this.datefroms = [];
    this.filterTours();
  }

  resetSelection(fields: (keyof SearchComponent)[]): void {
    fields.forEach(field => {
      (this[field] as any) = '';
    });
  }

  getStars(rating: number): number[] {
    return Array(rating).fill(0).map((_, i) => i + 1);
  }
}