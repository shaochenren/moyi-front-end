// student-info.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Info } from '../model/info.model';

@Injectable({
  providedIn: 'root'
})
export class StudentInfoService {

  private apiUrl = 'http://localhost:8080/info';

  constructor(private http: HttpClient) { }

  getInfoById(id: number): Observable<Info> {
    return this.http.get<Info>(`${this.apiUrl}/${id}`);
  }

  getAllInfo(): Observable<Info[]> {
    return this.http.get<Info[]>(this.apiUrl);
  }

  addInfo(info: Info): Observable<Info> {
    return this.http.post<Info>(this.apiUrl, info);
  }

  deleteInfo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
