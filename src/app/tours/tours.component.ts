import { Component, OnInit } from '@angular/core';
import { TourService } from '../models/tours.service';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css']
})

export class ToursComponent implements OnInit {

  tours: any[] = [];

  constructor(private tourService: TourService) { }

  ngOnInit(): void {
    this.getTours();
  }

  getStars(rating: number): number[] {
    return Array(rating).fill(0).map((x, i) => i + 1);
  }

  getTours(): void {
    this.tourService.getTours().subscribe(response => {
      this.tours = response.tours;
    });
  }
}