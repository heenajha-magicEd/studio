import { Component, Input, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { RatingModule } from 'primeng/rating';

@Component({
  selector: 'app-review',
  imports: [
    CardModule,
    BadgeModule,
    OverlayBadgeModule,
    FormsModule,
    RatingModule,
    ButtonModule,
  ],
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss',
})
export class ReviewComponent {
  @Input() movie: any;

  ngOnInit() {
    // console.log('review in card', this.review);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // if (changes['review'] && this.review) {
    //   console.log('review in card', this.review);
    // }
  }
}
