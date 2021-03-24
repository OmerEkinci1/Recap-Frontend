import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarResponseModel } from '../models/carResponseModel';

// injectable notasyonu gördüğümüzde bunun service olduğunu anlıyoruz.
@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44351/api/cars/getall";
  constructor(private httpClient:HttpClient) { }

  getCars(): Observable<CarResponseModel> {
    return this.httpClient.get<CarResponseModel>(this.apiUrl);
  }
}
