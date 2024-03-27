import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { PagListaVehiculosComponent } from './paginas/PagListaVehiculos/PagListaVehiculos.component';
import { PageVehiculoRegistroComponent } from './paginas/PageVehiculoRegistro/PageVehiculoRegistro.component';
import { VehiculoDetalleComponent } from './paginas/VehiculoDetalle/VehiculoDetalle.component';
import { ClienteComponent } from './paginas/Cliente/Cliente.component';


const routes: Routes = [
  {
    path: "home",
    component:HomeComponent
  },
  {
    path:"vehiculos",
    component:PagListaVehiculosComponent
  },

  {
    path:"vehiculo/:codigo",
    component: VehiculoDetalleComponent
  },

  {
    path:"vehiculo",
    component:PageVehiculoRegistroComponent
  },

  {
    path:"cliente",
    component:ClienteComponent
  },

  {
    path: "",
    component: PagListaVehiculosComponent,
    pathMatch:"full" //obligatoriamente cumple con ese patron
  }
  // {
  //   path:"**", //cualquier otra ruta que se ponga en el link
  //   component: HomeComponent,
  //   pathMatch:"full"
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
