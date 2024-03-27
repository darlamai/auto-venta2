import { Component, OnInit } from '@angular/core';

import { Vehiculo } from '../../utilitarios/modelos/Vehiculos';
import { ActivatedRoute } from '@angular/router';
import { VehiculoService } from '../../servicios/Vehiculo.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { validadorCodigo } from '../../validaciones/VehiculoValidaciones';
import { AbstractControl, ValidationErrors, ValidatorFn, FormGroup, FormBuilder, Validators } from "@angular/forms";


@Component({
  selector: 'app-VehiculoDetalle',
  templateUrl: './VehiculoDetalle.component.html',
  styleUrls: ['./VehiculoDetalle.component.css']
})
export class VehiculoDetalleComponent implements OnInit {

  vehiculo?: Vehiculo;

  formulario: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private vehiculoService: VehiculoService,
    private formBuilder : FormBuilder
  ) {

    this.formulario=this.formBuilder.group({

      "codigo":['',[Validators.required]],
      "marca":['',[Validators.required]],
      "modelo":['',[Validators.required]],
      "anio":['',[Validators.required]],
      "kilometraje":['',[Validators.required]],
      "precio":[],
      "calificación":['',[Validators.required]]
    });
    this.formulario.controls['codigo'].disable();

   }




  ngOnInit() {

    this.activatedRoute.params.subscribe(
      params =>{
        this.vehiculoService.getVehiculo(params['codigo']).subscribe(data=>{
          if(data.codigo=='1'){
            this.vehiculo=data.data;
            this.formulario.controls['codigo'].setValue(this.vehiculo?.codigo);
            this.formulario.controls['marca'].setValue(this.vehiculo?.marca);
            this.formulario.controls['modelo'].setValue(this.vehiculo?.modelo);
            this.formulario.controls['anio'].setValue(this.vehiculo?.anio);
            this.formulario.controls['kilometraje'].setValue(this.vehiculo?.kilometraje);
            this.formulario.controls['precio'].setValue(this.vehiculo?.precio);
            this.formulario.controls['calificacion'].setValue(this.vehiculo?.calificacion);
            
          } else{
            Swal.fire({
              title:"Mensaje de alerta",
              text:"No se pudo cargar la información.",
              icon:"error"
            });
          }

        });
      });
    

    }

    // guardar() {
    //   if (this.formulario.valid) {
    //     const codigo = this.formulario.controls['codigo'].value;
    
    //     // Obtener el vehículo actual utilizando el código proporcionado
    //     this.vehiculoService.getVehiculo(codigo).subscribe(existingVehiculo => {
    //       if (!existingVehiculo) {
    //         // El vehículo con el código proporcionado no existe, mostrar mensaje de error
    //         Swal.fire({
    //           title: "Error",
    //           text: "El vehículo con el código proporcionado no existe.",
    //           icon: "error"
    //         });
    //       } else {
    //         // Verificar si el código del vehículo coincide con el proporcionado
    //         if (existingVehiculo.codigo === codigo) {
    //           console.log(this.formulario.value);
              
    //           // El código del vehículo coincide, proceder con la actualización
    //           this.vehiculoService.actualizarVehiculo({...this.formulario.value}, codigo).subscribe(data => {
    //             if (data.codigo == '1') {
    //               Swal.fire({
    //                 title: "Mensaje",
    //                 text: "Vehículo actualizado con éxito",
    //                 icon: "success"
    //               });
    //             }
    //           });
    //         } else {
    //           // El código del vehículo no coincide con el proporcionado, mostrar mensaje de error
    //           Swal.fire({
    //             title: "Error",
    //             text: "El código del vehículo proporcionado no coincide con el vehículo a actualizar.",
    //             icon: "error"
    //           });
    //         }
    //       }
    //     });
    //   } else {
    //     // El formulario no es válido, mostrar mensaje de error
    //     Swal.fire({ title: "Error", text: "Faltan llenar campos o el formulario es inválido", icon: "error" });
    //   }
    // }


  guardar() {
      if (this.formulario.valid) {
        this.vehiculoService.actualizarVehiculo({...this.formulario.value}, this.formulario.controls['codigo'].value).subscribe(data => {
          if (data.codigo == '1') {
            Swal.fire({
              title: "Mensaje",
              text: "Vehiculo actualizado con éxito",
              icon: "info"
            });
          }
        });
      } else {
        Swal.fire({ title: "Mensaje", text: "Faltan llenar campos", icon: "error" });
      }
    }


      imprimir(data:any)
  {
    console.log('calificacion', data)
  }

  }





