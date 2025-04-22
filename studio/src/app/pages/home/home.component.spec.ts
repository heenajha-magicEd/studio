// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { HomeComponent } from './home.component'; // Ensure this is a standalone component
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
// import { InputTextModule } from 'primeng/inputtext';
// import { ButtonModule } from 'primeng/button';
// import { MenuModule } from 'primeng/menu';
// import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
// import { MainService } from '../../services/main.service';
// import { of } from 'rxjs';
// import { By } from '@angular/platform-browser';
// import { StoreModule } from '@ngrx/store';

// // Mock the MainService
// class MockMainService {
//   getAllImages() {
//     return of([]);
//   }
//   filterImages(query: string, perPage: number, color: string) {
//     return of({ results: [] });
//   }
//   getRandomImage() {
//     return of({});
//   }
// }

// describe('HomeComponent', () => {
//   let component: HomeComponent;
//   let fixture: ComponentFixture<HomeComponent>;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [
//         CommonModule,
//         FormsModule,
//         InputGroupAddonModule,
//         InputTextModule,
//         ButtonModule,
//         MenuModule,
//         HomeComponent, // Import HomeComponent, not declare it
//         SearchBarComponent,
//         StoreModule.forRoot(reducers),
//       ],
//       providers: [{ provide: MainService, useClass: MockMainService }],
//     }).compileComponents();

//     fixture = TestBed.createComponent(HomeComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should have the random search button on the home page', () => {
//     // Query the button using its class or other attributes
//     const randomSearchButton = fixture.debugElement.query(
//       By.css('button[label="Get Random Image"]')
//     );

//     // Check that the button exists
//     expect(randomSearchButton).toBeTruthy();
//   });

//   it('should have the custom search component', () => {
//     const searchBarComponent = fixture.debugElement.query(
//       By.css('app-search-bar')
//     );

//     // Check that the button exists
//     expect(searchBarComponent).toBeTruthy();
//   });
// });

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component'; // Ensure this is a standalone component
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { MainService } from '../../services/main.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

// Mock the MainService
class MockMainService {
  getAllImages() {
    return of([]);
  }
  filterImages(query: string, perPage: number, color: string) {
    return of({ results: [] });
  }
  getRandomImage() {
    return of({});
  }
}

// Mock reducers for testing purposes
const mockReducers = {}; // Replace with actual reducers or mock reducers for testing

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        FormsModule,
        InputGroupAddonModule,
        InputTextModule,
        ButtonModule,
        MenuModule,
        HomeComponent, // Import HomeComponent, not declare it (for standalone component)
        SearchBarComponent,
        StoreModule.forRoot(mockReducers), // Provide a mock reducer
      ],
      providers: [{ provide: MainService, useClass: MockMainService }],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have the random search button on the home page', () => {
    // Query the button using its class or other attributes
    const randomSearchButton = fixture.debugElement.query(
      By.css('button[label="Get Random Image"]')
    );

    // Check that the button exists
    expect(randomSearchButton).toBeTruthy();
  });

  it('should have the custom search component', () => {
    const searchBarComponent = fixture.debugElement.query(
      By.css('app-search-bar')
    );

    // Check that the search bar component exists
    expect(searchBarComponent).toBeTruthy();
  });
});
