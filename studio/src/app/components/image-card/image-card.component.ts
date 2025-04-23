import { CommonModule, DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-image-card',
  imports: [CardModule, ButtonModule, DatePipe, CommonModule],
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
  favBtnIcon: string = 'pi pi-heart';
  favBtnDisable = false;
  favBtnSeverity:
    | 'success'
    | 'info'
    | 'warn'
    | 'danger'
    | 'help'
    | 'primary'
    | 'secondary'
    | 'contrast'
    | null = 'secondary';

  addToFavorites() {
    this.addToFav.emit(this.post);
    this.updateButtonState();
  }

  updateButtonState() {
    this.favBtnLabel = 'Added to Favorites';
    this.favBtnIcon = 'pi pi-check';
    this.favBtnSeverity = 'success';
    this.favBtnDisable = true;
  }

  isFavorite(): boolean {
    return this.favorites.some((fav) => fav.id === this.post.id);
  }
}
