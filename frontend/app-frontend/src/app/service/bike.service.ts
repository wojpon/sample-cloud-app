import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bike } from '../model/bike';

@Injectable({
  providedIn: 'root',
})
export class BikeService {

  url = 'http://localhost:8080/api/v1/bikes';

  constructor(private http: HttpClient) {}

  getAllBikes(): Observable<Bike[]> {
    return this.http.get<Bike[]>(this.url)
  }
}
