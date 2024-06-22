import { Component, OnInit } from '@angular/core';
import { ABOUT_CARDS } from '../models/mock-about-cards';
import { TourlyReiviewService } from '../models/tourly-review.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  aboutCards = ABOUT_CARDS;
  showForm: boolean = false;
  showPopup: boolean = false;
  tourlyreviews: any[] = [];
  reviewText: string = '';

  constructor(private tourService: TourlyReiviewService, private router: Router) {}

  toggleForm() {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (!user || !user.email) {
      this.router.navigate(['/register']);
      return;
    }
    this.showForm = !this.showForm;
  }

  onAddReview() {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (!user || !user.email) {
      console.error('User not authenticated');
      return;
    }

    const reviewData = {
      review: this.reviewText,
      user_id: user.id
    };

    this.tourService.addReview(reviewData).subscribe(
      response => {
        console.log('Review added successfully', response);
        this.reviewText = '';
        this.showForm = false;
        this.showPopupMessage();
      },
      error => {
        console.error('Failed to add review', error);
        if (error.error && error.error.message) {
          alert(error.error.message);
        } else {
          alert('Failed to add review. Please try again.');
        }
      }
    );
  }

  showPopupMessage() {
    this.showPopup = true;
    setTimeout(() => {
      this.showPopup = false;
    }, 5000);
  }

  getStars(rating: number): number[] {
    return Array(rating).fill(0).map((x, i) => i + 1);
  }

  ngOnInit(): void {
    this.getTourlyReview();
  }

  getTourlyReview(): void {
    this.tourService.getTourlyReiview().subscribe(response => {
      this.tourlyreviews = response.tourlyreviews;
    });
  }
}