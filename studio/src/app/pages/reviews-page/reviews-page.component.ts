import { Component } from '@angular/core';
import { ReviewsService } from '../../services/reviews.service';
import { ReviewComponent } from '../../components/review/review.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reviews-page',
  imports: [ReviewComponent, SearchBarComponent, CommonModule],
  templateUrl: './reviews-page.component.html',
  styleUrl: './reviews-page.component.scss',
})
export class ReviewsPageComponent {
  reviewsData: any;
  searchInputs = [
    { name: 'keyword', placeholder: 'Keyword', type: 'text', required: true },
    { name: 'year', placeholder: 'Year', type: 'number', required: false },
  ];
  constructor(private reviewsService: ReviewsService) {}

  ngOnInit() {}

  search(event: { [key: string]: string }) {
    this.reviewsService
      .getAllReviews({
        keyword: event['keyword'],
        year: Number(event['year']),
      })
      .subscribe((res: any) => {
        this.reviewsData = res;
        console.log(this.reviewsData);
      });
  }
}
