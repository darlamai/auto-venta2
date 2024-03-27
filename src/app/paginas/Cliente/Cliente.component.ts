import { Component, OnInit } from '@angular/core';

import { Cliente } from '../../utilitarios/modelos/Cliente';
import { ClienteService } from '../../servicios/Cliente.service';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators,ValidatorFn, Form } from '@angular/forms';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-Cliente',
  templateUrl: './Cliente.component.html',
  styleUrls: ['./Cliente.component.css']
})
export class ClienteComponent implements OnInit {

  formulario: FormGroup

  constructor(
    private clienteService: ClienteService,
    private formBuilder:FormBuilder,
    private activatedRoute: ActivatedRoute


  ) { 
    this.formulario = this.formBuilder. group({
      "id": ['',[Validators.required]],
      "nombre": ['',[Validators.required]],
      "apellido": ['',[Validators.required]],
      "password": ['',[Validators.required]],
      "telefono":['',[Validators.required]],
      "email": ['',[Validators.required]],
  }
    )};

  ngOnInit() {
  }

  guardarCliente(): void {
    if (this.formulario.valid) {
      const cliente: Cliente = this.formulario.value;
      this.clienteService.crearCliente(cliente).subscribe(
        respuesta => {
          if (respuesta.codigo == '1') {
            Swal.fire({
              title: 'Mensaje',
              text: 'Cliente registrado con éxito.',
              icon: 'success'
            }).then(() => {
              this.formulario.reset();
            });
          } else {
            Swal.fire({
              title: 'Mensaje',
              text: 'No se pudo registrar el cliente: ' + respuesta.mensaje,
              icon: 'error'
            });
          }
        },
        error => {
          console.error(error);
          Swal.fire({
            title: 'Error',
            text: 'Ocurrió un error al intentar registrar el cliente.',
            icon: 'error'
          });
        }
      );
    } else {
      Swal.fire({
        title: 'Mensaje',
        text: 'Faltan llenar campos o los datos son inválidos.',
        icon: 'error'
      });
    }
  }
}



