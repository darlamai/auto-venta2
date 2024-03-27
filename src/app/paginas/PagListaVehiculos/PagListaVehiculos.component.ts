import { Component, Input, OnInit } from '@angular/core';
import { VehiculoService } from '../../servicios/Vehiculo.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Vehiculo } from '../../utilitarios/modelos/Vehiculos';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-PagListaVehiculos',
  templateUrl: './PagListaVehiculos.component.html',
  styleUrls: ['./PagListaVehiculos.component.css']
})
export class PagListaVehiculosComponent implements OnInit {


  constructor (private vehiculoService: VehiculoService){}

  public mostrarImagen=false;
  public listaVehiculos:Vehiculo []= [];
  //filtro:string="";
  //private _filtro:string="";
  public rows:number = 10;
  public page:number = 1;
  public pages:number = 0;
  public filtro:string = "";
 /*get filtro():string{
    return this._filtro
  }
  set filtro(filtro:string){
    this._filtro=filtro;
  }*/
  // @Input() valor:string = '';
  // listaVehiculos: Array <any>=[]


  ngOnInit() {
    console.log ('Ingreso a ejecutarse')

    this.consultarVehiculos();

  }

  consultarVehiculos(){

    this.vehiculoService.getVehiculos(this.filtro, this.rows, this.page).subscribe(respuesta => {
      if(respuesta.codigo == '1'){
        this.listaVehiculos=respuesta.data;
        this.pages = respuesta.pages;
        this.paginar(respuesta.pages);
      }
      //console.log(respuesta)
      //this.listaVehiculos=respuesta;
    });


  }



  consultarVehiculos_filtro(): void {
    // Si el campo de filtro está vacío, mostrar todos los vehículos
    if (!this.filtro.trim()) {
      // Aquí puedes cargar nuevamente todos los vehículos desde tu servicio o donde los tengas almacenados
      // this.listaVehiculos = this.vehiculoService.obtenerTodos(); // Ejemplo de cómo obtener todos los vehículos desde un servicio
    } else {
      // Si hay un valor en el campo de filtro, filtrar la lista de vehículos
      this.listaVehiculos = this.listaVehiculos.filter(vehiculo =>
        vehiculo.codigo.includes(this.filtro) || vehiculo.marca?.includes(this.filtro) || vehiculo.modelo?.includes(this.filtro)
      );
    }
  }


  cambiarPagina(pagina:number){
    this.page = pagina;
    this.consultarVehiculos();

  }

  listaPaginas: number[] = [];
  paginar(pages:number){
    this.listaPaginas = [];
    for(let i=1; i<=pages; i++){
      this.listaPaginas.push(i);

    }

  }

  siguiente(){
    if(this.page < this.pages){
      this.page++;
      this.consultarVehiculos();
    }
  }

  atras(){
    if(this.page > 1){
      this.page--;
      this.consultarVehiculos();

  }
}






  eliminar(codigo:string){
    Swal.fire({
      title:"¿Estas seguro que deseas eliminar este registro?",
      showCancelButton:true,
      confirmButtonText:"Si",
      cancelButtonText:"No",
      icon: "question"

    }).then((res)=>{
      if(res.isConfirmed){
        this.vehiculoService.eliminarVehiculo(codigo).subscribe( data =>{
          if(data.codigo=='1'){
            this.consultarVehiculos();
            Swal.fire({
              title:"Mensaje",
              text:"Vehiculo eliminado con éxito",
              icon:"success"

            });
        }else {
          Swal.fire({
            title:"Mensaje",
            text:"No se pudo eliminar el registro: "+data.mensaje,
            icon:"error"

          });
        }
      });
      }
    });
  }

  
  mostrar(){
    this.mostrarImagen=! this.mostrarImagen
  }

    recepcion(dato: number){

    console.log('Dato',dato)
  }

  
}






  // constructor(
  //   private vehiculoService: VehiculoService
  //   )
  //   {

      
    
  //   }

   //metodo OnInit


    // this.consultaVehiculos();
    // this.vehiculoService.getVehiculos().subscribe( respuesta => {
    //  console.log(respuesta);
    //  this.listaVehiculos = respuesta; 
    // })
  //}

  // consultarVehiculos(){
  //   this.vehiculoService.getVehiculos().subscribe( respuesta => {
  //     console.log(respuesta);
  //     this.listaVehiculos = respuesta;
  //   });
  // }

  





  
  
  // consultaVehiculos(){
  //     this.vehiculoService.getVehiculos(this.filtro). subscribe(data =>{
  //       this.listaVehiculos= data;
  //   });
  // }






