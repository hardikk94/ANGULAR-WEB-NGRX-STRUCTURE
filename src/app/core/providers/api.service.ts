import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from './../../../environments/environment'
import { apiResponse } from './../models/api.response.model'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public apiURL: string
  public imageURL: string
  constructor(public http: HttpClient) {
    this.apiURL = environment.api_url;
    this.imageURL = environment.image_url
    console.log("api url on build" ,this.apiURL)
  }

  /**
   * handle error
   * @param error 
   */
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };


  /**
   * setting a header for json data
   */
  private setJsonDataHeaders() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      })
    };
    return httpOptions.headers
  }

  /**
   * setting header for form data
   */
  private setFormdataHeader() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'multipart/form-data',
        'Accept': 'application/json',
      })
    };
    return httpOptions.headers
  }

  /**
   * get api (list)
   * @param path  api url 
   * @param params req params data
   */
  get(path: string, params: HttpParams = new HttpParams()): Observable<apiResponse> {
    return this.http.get<apiResponse>(`${environment.api_url}${path}`, { headers: this.setJsonDataHeaders(), params })
      .pipe(catchError(this.handleError));
  }

  /**
   * put api call (update)
   * @param path  api url
   * @param body  req params data
   * @param isJson is json data or not
   */
  put(path: string, body: Object = {}, isJson = true): Observable<apiResponse> {
    if (isJson)
      return this.http.put<apiResponse>(`${environment.api_url}${path}`, body, { headers: this.setJsonDataHeaders() })
        .pipe(catchError(this.handleError));
    else
      return this.http.put<apiResponse>(`${environment.api_url}${path}`, body, { headers: this.setFormdataHeader() })
        .pipe(catchError(this.handleError));
  }

  /**
   * post api call (add)
   * @param path api url
   * @param body request params
   * @param isJson is json data or not
   */
  post(path: string, body: Object = {}, isJson = true): Observable<apiResponse> {
    if (isJson)
      return this.http.post<apiResponse>(`${environment.api_url}${path}`, body, { headers: this.setJsonDataHeaders() })
        .pipe(catchError(this.handleError));
    else
      return this.http.post<apiResponse>(`${environment.api_url}${path}`, body, { headers: this.setFormdataHeader() })
        .pipe(catchError(this.handleError));

  }

  /**
   * delete api (delete data)
   * @param path api url
   */
  delete(path): Observable<apiResponse> {
    return this.http.delete<apiResponse>(`${environment.api_url}${path}`, { headers: this.setJsonDataHeaders() })
      .pipe(catchError(this.handleError));
  }
}
