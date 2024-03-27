import { NgModule } from "@angular/core";
import { AEspacioPipe } from "./pipes/AEspacio.pipe";
import { CalificacionComponent } from "./componentes/calificacion/calificacion.component";
import { CommonModule } from "@angular/common";


@NgModule({
    //SE DECLARA TODOS LOS COMPONENTES DEL MODULO
    declarations:[
        AEspacioPipe,
        CalificacionComponent
    ],
    //SE IMPORTA LO QUE SE NECESITA PARA QUE FUNCIONEN LOS COMPONENTES
    imports:[
        CommonModule
    ],

    //COMPONENTES QUE OTROS MODULOS USEN //QUE SE PUEDEN EXPORTAR
    exports:[
        AEspacioPipe,
        CalificacionComponent
    ]
})

export class UtilitariosModule{

}