import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Headers, Http, Response, URLSearchParams, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { JwtService } from './jwt.service';

@Injectable()
export class ApiService {
  constructor(
    private http: Http, public HttpClient: HttpClient,
    private jwtService: JwtService
  ) { }


  // var form = new FormData();
  // for (var key in paramval) {
  //   form.append(key, paramval[key]);
  // }
  private setHeaders(): Headers {
    const headersConfig = {
      'Content-Type': 'application/json',
      'Vary': 'Accept'
    };

    if (this.jwtService.getToken()) {
      headersConfig['Authorization'] = `Token ${this.jwtService.getToken()}`;
    }

    return new Headers(headersConfig);
  }

  private formatErrors(error: any) {
    return Observable.throw(error.json());
  }

  get(path: string, params: URLSearchParams = new URLSearchParams()): Observable<any> {
    return this.http.get(`${environment.api_url}${path}`, { headers: this.setHeaders(), search: params })
      .catch(this.formatErrors)
      .map((res: Response) => res.json());
  }

  put(path: string, body: Object = {}): Observable<any> {

    return this.http.put(
      `${environment.api_url}${path}`,
      JSON.stringify(body),
      new RequestOptions({ headers: this.setHeaders() })
    )
      .catch(this.formatErrors)
      .map((res: Response) => res.json());
  }

  post(path: string, body: Object = {}): Observable<any> {

    return this.http.post(
      `${environment.api_url}${path}`,
      JSON.stringify(body),
      new RequestOptions({ headers: this.setHeaders() })
    )
      .catch(this.formatErrors)
      .map((res: Response) => {
        return res.json()
      });
  }

  postWithToken(path: string, body: Object = {}): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', `Token ${this.jwtService.getToken()}`);
    let options = new RequestOptions({ headers: headers });
    return this.http.post(
      `${environment.api_url}${path}`,
      JSON.stringify(body),
      options)
      .catch(this.formatErrors)
      .map((res: Response) => {
        return res.json()
      });



    // let bodyString = JSON.stringify(deed);
    // let headers = new Headers({ 'Content-Type': 'application/json' });
    // headers.append('Authorization', `Bearer ${this.authService.token()}`);
    // let options = new RequestOptions({ headers: headers });
    // return this.http.post(`${this.baseUrl}/create`, bodyString, options)
    //     .map((res: Response) => res.json())
  }
  GetWithToken(path: string): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', `Token ${this.jwtService.getToken()}`);
    let options = new RequestOptions({ headers: headers });
    return this.http.get(`${environment.api_url}${path}`, options)
      .catch(this.formatErrors)
      .map((res: Response) => {
        return res.json()
      });



    // let bodyString = JSON.stringify(deed);
    // let headers = new Headers({ 'Content-Type': 'application/json' });
    // headers.append('Authorization', `Bearer ${this.authService.token()}`);
    // let options = new RequestOptions({ headers: headers });
    // return this.http.post(`${this.baseUrl}/create`, bodyString, options)
    //     .map((res: Response) => res.json())
  }
  delete(path): Observable<any> {
    return this.http.delete(
      `${environment.api_url}${path}`,
      { headers: this.setHeaders() }
    )
      .catch(this.formatErrors)
      .map((res: Response) => res.json());
  }
}
