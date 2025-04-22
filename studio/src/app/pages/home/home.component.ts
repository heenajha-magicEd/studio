import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';
import { ImageCardComponent } from '../../components/image-card/image-card.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { map, Observable, of } from 'rxjs';
import { FavoriteImage } from '@models/dataTypes.model';
import { addToFavorites } from 'src/app/store/favorites/favorites.actions';
import { Store } from '@ngrx/store';
import { selectAllFavorites } from 'src/app/store/favorites/favorites.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
  imports: [
    ImageCardComponent,
    CommonModule,
    FormsModule,
    InputGroupAddonModule,
    InputTextModule,
    ButtonModule,
    MenuModule,
    SearchBarComponent,
  ],
})
export class HomeComponent implements OnInit {
  allPosts$: Observable<any> = of([]);
  filteredImages$: Observable<any[]> = of([]);
  showAllPosts: boolean = true;
  randomImg: any;
  data: any;
  users: any;
  showRandomBtn: boolean = false;
  searchInputs = [
    {
      name: 'keyword',
      placeholder: 'search by keyword',
      type: 'text',
      required: true,
    },
    {
      name: 'color',
      placeholder: 'search by color',
      type: 'text',
      required: false,
    },
    {
      name: 'perPage',
      placeholder: 'number of images',
      type: 'number',
      required: false,
    },
  ];
  filteredImages: any;
  filterParams = { query: '', color: '', perPage: 0 };
  filterStatement: string = '';
  errorStatement: string = '';

  constructor(private api: MainService, private store: Store) {}

  ngOnInit() {
    this.getAllImages();
  }
  getAllImages() {
    this.allPosts$ = this.api.getAllImages();
    this.allPosts$.subscribe({
      next: (res: any) => {
        this.showRandomBtn = true;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  showErrorStatement() {
    this.errorStatement = 'No images found for ' + this.getSearchStatement();
  }

  searchImages(event: { [key: string]: string }) {
    this.filterParams.query = event['keyword'];
    this.filterParams.color = event['color'];
    this.filterParams.perPage = event['perPage']
      ? Number(event['perPage'])
      : 20;

    this.filteredImages$ = this.api
      .filterImages(
        this.filterParams.query,
        this.filterParams.perPage,
        this.filterParams.color
      )
      .pipe(
        map((res: any) => {
          this.showAllPosts = false;
          if (res?.results?.length > 0) {
            this.filterStatement = this.getSearchStatement();
            this.errorStatement = '';
          } else {
            this.filterStatement = '';
            this.errorStatement =
              'No images found for ' + this.getSearchStatement();
          }
          return res.results;
        })
      );
  }

  getSearchStatement() {
    return this.filterParams.color
      ? `${this.filterParams.query}, ${this.filterParams.color}`
      : `${this.filterParams.query}`;
  }

  getRandomImage() {
    this.api.getRandomImage().subscribe((res: any) => {
      this.randomImg = res;
    });
  }

  addToFavorites(image: FavoriteImage) {
    this.store.dispatch(addToFavorites({ image }));
  }
}
