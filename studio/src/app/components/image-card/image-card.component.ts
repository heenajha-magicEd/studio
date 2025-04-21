import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-image-card',
  imports: [CardModule, ButtonModule, DatePipe],
  standalone: true,
  templateUrl: './image-card.component.html',
  styleUrl: './image-card.component.scss',
})
export class ImageCardComponent {
  @Input() post: any;
  @Output() addToFav = new EventEmitter();
  @Input() favorites: any[] = [];
  @Input() showAddToFav: boolean = true;
  favBtnLabel: string = 'Add to favorites';
  favBtnIcon: string = 'pi pi-arrow-down';

  addToFavorites() {
    this.addToFav.emit(this.post);
    this.updateButtonState();
  }

  updateButtonState() {
    this.favBtnLabel = 'Added to favorites';
    this.favBtnIcon = 'pi pi-heart';
  }

  isFavorite(): boolean {
    return this.favorites.some((fav) => fav.id === this.post.id);
  }
}
