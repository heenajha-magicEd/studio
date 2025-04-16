import { HttpInterceptorFn } from '@angular/common/http';

export const AuthInterceptor: HttpInterceptorFn = (req: any, next: any) => {
  const modifiedReq = req.clone({
    setHeaders: {
      Authorization: `dummy-authorisation-token`,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
  return next(modifiedReq);
};
