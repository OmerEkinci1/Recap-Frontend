import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';

// injectable notasyonu gördüğümüzde bunun service olduğunu anlıyoruz.
@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44351/api/";

  constructor(private httpClient:HttpClient) { }

  getCars(): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "products/getall";
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByBrand(brandId:number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "products/getbybrand?brandId="+brandId;
    return this.httpClient.get<ListResponseModel<Car>>(this.apiUrl);
  }
}
