import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'profiles';

  // public getUsers(url: string): Observable<any> {
  //   return this.httpClient
  //     .get(this.API_URL + '/api/' + url)
  //     .pipe(map((res: any) => res));
  // }
}
