import { Component } from '@angular/core';
import { ArtistsComponent } from './components/artists/artists.component';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [ArtistsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  // title = 'profiles';
  // constructor(private httpClient: HttpClient) {}
  // public getUsers(url: string): Observable<any> {
  //   return this.httpClient
  //     .get(this.API_URL + '/api/' + url)
  //     .pipe(map((res: any) => res));
  // }
}
