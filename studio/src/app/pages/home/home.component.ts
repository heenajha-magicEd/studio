import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';
import { ImageCardComponent } from '../../components/image-card/image-card.component';
import { CommonModule } from '@angular/common';
import { PostDataElement } from '../../models/dataTypes.model';
import { FormsModule } from '@angular/forms';
import { InputGroup } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../../services/auth.service';
import { ProgressSpinner } from 'primeng/progressspinner';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';

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
    ProgressSpinner,
    SearchBarComponent,
  ],
})
export class HomeComponent implements OnInit {
  data: any;
  allPosts: any;
  users: any;
  pageLoading: boolean = false; //set this up properly
  searchInputs = [
    {
      name: 'keyword',
      placeholder: 'keyword...',
      type: 'text',
      required: true,
    },
  ];

  constructor(private api: MainService) {}

  ngOnInit() {
    this.getAllImages();
  }

  search(event: { [key: string]: string }) {
    console.log('Search triggered with:', event);
    // Do something with: event.keyword, event.year, etc.
  }

  getAllImages() {
    this.api.getAllImages().subscribe((res: any) => {
      this.allPosts = res;
      setTimeout(() => {
        this.pageLoading = false;
      }, 2000);

      console.log(this.allPosts);
    });
  }

  getRandomImage() {
    this.api.getRandomImage().subscribe((res: any) => {
      this.data = res;
      console.log(this.data);
    });
  }

  // getUsers() {
  //   this.api.getUsers('users?page=1').subscribe((res: any) => {
  //     this.users = res;
  //   });
  // }
}
