export interface Vehiculo{
    codigo: string;
    marca?: string;
    modelo?:string;
    anio?:number;
    color?: string;
    kilometraje?:string;
    precio?:number;
    foto?:string | null;
    calificacion?:number|undefined;


}