
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { PagListaVehiculosComponent } from "./PagListaVehiculos/PagListaVehiculos.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UtilitariosModule } from "../utilitarios/UtilitariosModule";
import { PageVehiculoRegistroComponent } from "./PageVehiculoRegistro/PageVehiculoRegistro.component";
import { VehiculoDetalleComponent  } from   "./VehiculoDetalle/VehiculoDetalle.component";
import { RouterModule } from "@angular/router";
import { ClienteComponent } from "./Cliente/Cliente.component";

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        UtilitariosModule,
        RouterModule,
        ReactiveFormsModule
        
    ],
    declarations:[
        PagListaVehiculosComponent,
        PageVehiculoRegistroComponent,
        VehiculoDetalleComponent,
        ClienteComponent
    ],
    exports:[
        PagListaVehiculosComponent,
        PageVehiculoRegistroComponent,
        VehiculoDetalleComponent,
        ClienteComponent
    ]


})
export class PaginaModule{

}