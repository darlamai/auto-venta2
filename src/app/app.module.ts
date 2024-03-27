import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaModule } from './paginas/PaginaModule';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { VehiculoDetalleComponent } from './paginas/VehiculoDetalle/VehiculoDetalle.component';
import { UserInterceptorService } from './interceptores/UserInterceptor.service';
// import { InterceptoresComponent } from './interceptores/interceptores.component';


@NgModule({
  //aquí se declaran los componentes 
  declarations: [		
    AppComponent,
    // InterceptoresComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PaginaModule,
    HttpClientModule
  ],
  //aquí se colocan los servicios
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: UserInterceptorService,multi:true}
  ],
  //aquí se declaran los componentes que necesitan ser cargados 
  //cuando se inicialice la aplicacion
  bootstrap: [AppComponent]
})
export class AppModule { }
