import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = "http://localhost:8080/api/students"

  constructor(private http: HttpClient) { }
  register(user: any): Observable<any> {
    return this.http.post(this.url + '/create', user);
  }
}
