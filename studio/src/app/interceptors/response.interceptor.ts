import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

// Interceptor function to console response status (success or error)
export const responseAlertInterceptor: HttpInterceptorFn = (
  req: any,
  next: any
): Observable<HttpEvent<any>> => {
  return next(req).pipe(
    tap({
      next: (event: HttpEvent<any>) => {
        if (event instanceof HttpResponse && event.status === 200) {
          console.log('API Call Successful!');
        }
      },
      error: (error: any) => {
        console.log(`API Call Failed: ${error.status} - ${error.message}`);
      },
    })
  );
};
