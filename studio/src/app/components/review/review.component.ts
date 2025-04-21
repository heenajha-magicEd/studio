import { Component, Input, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { RatingModule } from 'primeng/rating';
import { DisclaimertDirective } from '../../directives/disclaimer.directive';

@Component({
  selector: 'app-review',
  imports: [
    CardModule,
    BadgeModule,
    OverlayBadgeModule,
    FormsModule,
    RatingModule,
    ButtonModule,
    DisclaimertDirective,
  ],
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss',
})
export class ReviewComponent {
  @Input() movie: any;
}
