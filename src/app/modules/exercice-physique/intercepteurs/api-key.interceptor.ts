import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SpiderService } from 'src/app/services/spider.service';

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {
  spiderservice: any;
  constructor(private apiKey: SpiderService) {}

  // getApiKey(): string {
  //   return this.spiderservice.getApiKey();
  // }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    
    const apiKey = 'SdpE+UcQTW9h+MM4jJVNSg==G7KwQIAp8tyA80iO';
    const cloneReq = request.clone({
      headers: request.headers.set('X-Api-Key', apiKey),
    });

    console.log(cloneReq);

    return next.handle(cloneReq);
  }
}
