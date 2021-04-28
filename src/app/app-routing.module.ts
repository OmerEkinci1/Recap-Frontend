import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarsComponent } from './components/car/car.component';

const routes: Routes = [
  //app.component.html de routeda ne görünmesini istiyorsak buraya yazıyoruz.
  {path: "", pathMatch:"full", component: CarsComponent},
  {path: "cars", component: CarsComponent},
  {path: "cars/brand/:brandId", component: CarsComponent},
  {path: "cars/add", component: CarAddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
