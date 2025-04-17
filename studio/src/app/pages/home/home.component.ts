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

  constructor(private api: MainService) {}

  ngOnInit() {
    this.getAllImages();
  }

  getAllImages() {
    this.allPosts$ = this.api.getAllImages();
    this.allPosts$.subscribe((res: any) => {
      this.showRandomBtn = true;
      console.log('main', res);
    });
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
          this.filterStatement = this.getSearchStatement();
          return res.results;
        })
      );
  }

  // getSearchStatement() {
  //   return `${this.filterParams.query}`;
  // }
  getSearchStatement() {
    return this.filterParams.color
      ? `${this.filterParams.query}, ${this.filterParams.color}`
      : `${this.filterParams.query}`;
  }

  getRandomImage() {
    this.api.getRandomImage().subscribe((res: any) => {
      this.randomImg = res;
      console.log(this.data);
    });
  }

  // getUsers() {
  //   this.api.getUsers('users?page=1').subscribe((res: any) => {
  //     this.users = res;
  //   });
  // }
}
