import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Bike } from '../model/bike';

@Injectable({
  providedIn: 'root',
})
export class BikeService {
  url = environment.BACKEND_API_URL + '/bikes';

  constructor(private http: HttpClient) {}

  getAllBikes(): Observable<Bike[]> {
    console.log(this.url)
    return this.http.get<Bike[]>(this.url);
  }

  postBikeForm(bike: Bike): Observable<any> {
    return this.http.post(this.url, bike);
  }
}
