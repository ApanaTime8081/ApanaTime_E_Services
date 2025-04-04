import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private apiUrl = 'https://your-api-url/api/email/send';

  constructor(private http: HttpClient) {}

  sendEmail(emailData: {
    ToEmail: string;
    Subject: string;
    Body: string;
  }): Observable<any> {
    return this.http.post(this.apiUrl, emailData);
  }
}
