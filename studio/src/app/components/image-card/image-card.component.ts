import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-image-card',
  imports: [CardModule, ButtonModule],
  standalone: true,
  templateUrl: './image-card.component.html',
  styleUrl: './image-card.component.scss',
})
export class ImageCardComponent {
  @Input() post: any;

  ngOnInit() {
    console.log(this.post);
  }
}
