import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  SPL_URL = `https://api.unsplash.com`;
  API_URL = 'https://reqres.in';
  constructor(private httpClient: HttpClient) {}

  public getRandomImage(): any {
    return this.httpClient
      .get(`${this.SPL_URL}/photos/random?client_id=${environment.ACCESS_KEY}`)
      .pipe(catchError(() => of('Error fetching image')));
  }

  public getAllImages(): any {
    return this.httpClient
      .get(
        `${this.SPL_URL}/photos??page=1&per_page=100&client_id=${environment.ACCESS_KEY}
        `
      )
      .pipe(catchError(() => of('Error fetching image')));
  }

  // public getUsers(url: string): Observable<any> {
  //   return this.httpClient
  //     .get(this.API_URL + '/api/' + url)
  //     .pipe(map((res: any) => res));
  // }
}
