import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  constructor(private http: HttpClient) {}
  getFilterOptions(): Observable<any> {
    return this.http.get('../../assets/filter.json')

  }
}
