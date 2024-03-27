import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../utilitarios/modelos/Vehiculos';
import { VehiculoService } from '../../servicios/Vehiculo.service';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators,ValidatorFn } from '@angular/forms';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-PageVehiculoRegistro',
  templateUrl: './PageVehiculoRegistro.component.html',
  styleUrls: ['./PageVehiculoRegistro.component.css']
})
export class PageVehiculoRegistroComponent implements OnInit {

  formulario: FormGroup;
  
  constructor(
    private vehiculoService: VehiculoService,
    private formBuilder: FormBuilder,
    private activedRoute: ActivatedRoute
  ) { 
    
    this.formulario = this.formBuilder. group({
      "codigo": ['',[Validators.required]],
      "marca": ['',[Validators.required]],
      "modelo": ['',[Validators.required]],
      "anio": ['',[Validators.required]],
      "kilometraje":['',[Validators.required]],
      "precio":[],
      "calificacion": ['',[Validators.required]],
  
  }
  )};

  ngOnInit() {

    // this.activedRoute.params.subscribe(
    //   param =>{
    //     let codigo =param['codigo'];
    //     this.vehiculoService
    //   }
    // )
   
  }
  guardar(){

    if(this.formulario.valid){
      
      this.vehiculoService.insertVehiculo({...this.formulario.value}).subscribe(
        respuesta => {
          if(respuesta.codigo=='1'){
            Swal.fire({
              title:"Mensaje",
              text:"Vehiculo registrado con éxito.",
              icon:"success"
            }).then(res =>{
              this.formulario.reset();
            });

          }
          else{
            Swal.fire({
              title:"Mensaje",
              text: "No se pudo registrar el vehículo: "+respuesta.mensaje,
              icon: "error"
            })
          }
        }, (error) => {
          console.log(error);
          
        }
      );

    }else{
      Swal.fire({
        title:"Mensaje",
        text:"Faltan llenar campos?",
        icon:"error"
      });
    }
  }

}


