import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarsComponent implements OnInit {

  cars:Car[] = [];
  dataLoaded = false;
  filterText ="";

  constructor(private carService:CarService, private activatedRoute: ActivatedRoute, 
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getCarsByBrand(params["brandId"])
      }else{
        this.getCars()
      }
    })
  }

  getCars(){
    this.carService.getCars().subscribe(response=>{
      this.cars = response.data
      this.dataLoaded = true
    })
  }

  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe(response=>{
      this.cars = response.data
      this.dataLoaded = true
    })
  }

  addToChart(car:Car){
    if (car.carId === 1){
      this.toastrService.error("Error","This car cannot add to chart");
    }else {
      this.toastrService.success("Added to chart", car.carName);
    }
  }
}
