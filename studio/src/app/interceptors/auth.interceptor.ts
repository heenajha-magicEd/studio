import { HttpInterceptorFn } from '@angular/common/http';

export const AuthInterceptor: HttpInterceptorFn = (req: any, next: any) => {
  const excludeUrl = 'http://www.omdbapi.com/';

  // Check if the request URL contains the exclude URL
  if (req.url.includes(excludeUrl)) {
    return next(req);
  }

  const modifiedReq = req.clone({
    setHeaders: {
      Authorization: `dummy-authorisation-token`,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
  return next(modifiedReq);
};
