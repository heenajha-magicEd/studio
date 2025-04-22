import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArtistsService {
  constructor(private httpClient: HttpClient) {}

  public getAllUsers(): Observable<any[]> {
    return this.httpClient.get<any[]>(`https://dummyjson.com/users`).pipe(
      catchError((error) => {
        console.error('Error fetching images', error);
        return of([]);
      })
    );
  }
}
