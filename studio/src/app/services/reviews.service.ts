import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, of } from 'rxjs';
import { environment as env } from '../../environment';

@Injectable({
  providedIn: 'root',
})
export class ReviewsService {
  constructor() {}
  private httpClient = inject(HttpClient);

  public getAllReviews({
    keyword,
    year,
  }: {
    keyword?: string;
    year?: number;
  }): any {
    const params = new URLSearchParams();

    params.set('apikey', env.REVIEWS_KEY);

    if (keyword) {
      params.set('t', keyword);
    }

    if (year) {
      params.set('y', year.toString());
    }
    params.set('plot', 'full');

    const url = `${env.REVIEWS_BASE_URL}?${params.toString()}`;
    return this.httpClient.get(url).pipe(
      catchError((error) => {
        console.error('Error fetching reviews:', error);
        return of('Error fetching reviews');
      })
    );
  }
}
