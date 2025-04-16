import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

// Interceptor function to show alerts based on response status
export const responseAlertInterceptor: HttpInterceptorFn = (
  req: any,
  next: any
): Observable<HttpEvent<any>> => {
  return next(req).pipe(
    tap({
      next: (event: HttpEvent<any>) => {
        // If the response is successful (status code 200)
        if (event instanceof HttpResponse && event.status === 200) {
          console.log('API Call Successful!');
        }
      },
      error: (error: any) => {
        // If there's an error response
        console.log(`API Call Failed: ${error.status} - ${error.message}`);
      },
    })
  );
};
