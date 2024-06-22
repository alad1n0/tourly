import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TourService } from '../models/tours.service';
import { ReviewService } from '../models/tours-review.service';
import { ToursOrderService } from '../models/tours-order.service';

@Component({
  selector: 'app-tour-detail',
  templateUrl: './tour-detail.component.html',
  styleUrls: ['./tour-detail.component.css']
})
export class TourDetailComponent implements OnInit {
  tour: any;
  reviews: any[] = [];
  showForm: boolean = false;
  showPopup: boolean = false;
  showPopupOrder: boolean = false;
  reviewText: string = '';

  toggleForm() {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (!user || !user.email) {
      this.router.navigate(['/register']);
      return;
    }
    this.showForm = !this.showForm;
  }

  constructor(
    private route: ActivatedRoute,
    private tourService: TourService,
    private reviewService: ReviewService,
    private router: Router,
    private orderService: ToursOrderService
  ) { }
  
  getStars(rating: number): number[] {
    return Array(rating).fill(0).map((x, i) => i + 1);
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    
    this.tourService.getTourById(id).subscribe(response => {
      if (response.tours && response.tours.length > 0) {
        this.tour = response.tours[0];
      }
    });

    this.reviewService.getReviewsForTour(id).subscribe(response => {
      if (response.toursreview) {
        this.reviews = response.toursreview;
      }
    });
  }

  onAddReview(): void {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (!user || !user.email) {
      console.error('User not authenticated');
      return;
    }

    const reviewData = {
      review: this.reviewText,
      user_id: user.id,
      tour_id: this.tour.id
    };

    this.reviewService.addReviewTours(reviewData).subscribe(
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

  addOrder(): void {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (!user || !user.email) {
      console.error('User not authenticated');
      this.router.navigate(['/register']);
      return;
    }
  
    const orderData = {
      user_id: user.id,
      tour_id: this.tour.id
    };
  
    this.orderService.addOrder(orderData).subscribe(
      response => {
        console.log('Order added successfully', response);
        this.showPopupOrderMessage();
      },
      error => {
        console.error('Failed to add order', error);
        if (error.error && error.error.message) {
          alert(error.error.message);
        } else {
          alert('Failed to add order. Please try again.');
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

  showPopupOrderMessage() {
    this.showPopupOrder = true;
    setTimeout(() => {
      this.showPopupOrder = false;
    }, 5000);
  }
}