import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://api.restful-api.dev/objects';

  constructor(private http: HttpClient) { }

  getData(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}`).pipe(delay(3000));
  }
}
