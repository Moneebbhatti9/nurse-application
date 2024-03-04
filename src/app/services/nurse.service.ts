import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NurseService {
  constructor(private http: HttpClient) {}
  baseUrl: string = 'https://api.digital4nurse.ch/api/public/nurse-search';

  getAllNurses(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post(
      `${this.baseUrl}`,
      { sort_by: 'name-desc' },
      { headers }
    );
  }
}
