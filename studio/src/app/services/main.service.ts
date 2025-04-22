import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment as env } from '../../environment';
import { UnsplashImage, UnsplashSearchResponse } from '@models/dataTypes.model';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  constructor(private httpClient: HttpClient) {}

  // Get a list of all images from unsplash
  public getAllImages(): Observable<UnsplashImage[]> {
    return this.httpClient
      .get<UnsplashImage[]>(
        `${env.UNSPLASH_API_URL}/photos?page=1&per_page=15&client_id=${env.ACCESS_KEY}`
      )
      .pipe(
        catchError((error) => {
          console.error('Error fetching image', error);
          return of([]);
        })
      );
  }

  // Apply seach filters for images from unsplash
  public filterImages(
    query: string,
    perPage: number = 30,
    color?: string
  ): Observable<UnsplashSearchResponse> {
    let url = `${env.UNSPLASH_API_URL}/search/photos?page=1&query=${query}&per_page=${perPage}&client_id=${env.ACCESS_KEY}`;

    if (color) {
      url += `&color=${color}`;
    }

    return this.httpClient.get<UnsplashSearchResponse>(url).pipe(
      catchError((error) => {
        console.error('Error fetching filtered images:', error);
        return of({ results: [], total: 0, total_pages: 0 });
      })
    );
  }

  // Get a random image from Unsplash
  public getRandomImage(): Observable<UnsplashImage[]> {
    const url = `${env.UNSPLASH_API_URL}/photos/random?orientation=squarish&client_id=${env.ACCESS_KEY}`;
    return this.httpClient.get<UnsplashImage[]>(url).pipe(
      catchError(() => {
        console.error('Error fetching randon image');
        return of([]);
      })
    );
  }
}
