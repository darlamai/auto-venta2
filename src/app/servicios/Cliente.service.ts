import { Injectable } from '@angular/core';
//import { Vehiculo } from '../utilitarios/modelos/Vehiculos';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class ClienteService {

    private baseUrl = "https://www.epico.gob.ec/vehiculo/public/api/";
  
    private httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
  
    constructor(private http: HttpClient) {}
  
    // Método para obtener un cliente por su ID
    obtenerClientePorId(id: number): Observable<Cliente> {
      const url = `${this.baseUrl}/cliente/${id}`;
      return this.http.get<Cliente>(url);
    }
  
    // Método para crear un nuevo cliente
    // crearCliente(cliente: Cliente): Observable<any> {
    //   const url = `${this.baseUrl}/cliente`;
    //   return this.http.post<any>(url, cliente, this.httpOptions);
    // }

    crearCliente(cliente: Cliente): Observable <Respuesta>{

        // let httpOptions={
        //   headers : new HttpHeaders({ 'Content-Type':'application/json'})
        // }
        return (this.http.post<Respuesta>)(this.baseUrl+"cliente/", cliente);
      }
  }





  export interface Cliente {
    id: number;
    nombre: string;
    apellido: string;
    password?: string;
    telefono?: string;
    email?: string;
  }

export interface Respuesta {
  codigo:string;
  mensaje:string;
  data:Array<Cliente>|Cliente|any;
}



