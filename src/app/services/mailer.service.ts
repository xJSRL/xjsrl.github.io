import { Injectable } from '@angular/core';
import { Mailer } from './data.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailerService {
  private url = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public sendMail(Mailer: Mailer): Observable<any> {
    return this.http.post(this.url.concat('/email'), { Mailer }, { responseType: 'text' })
   .pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
