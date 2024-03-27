import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'AEspacio'
})

//PipeTrnaform es una interfaz, cuando se ejecute angular se lo llama 
export class AEspacioPipe implements PipeTransform {

  transform(value: string, buscar: string): any {
    const valorReemplazo= " ";
    return value.replaceAll(buscar, valorReemplazo);
  }

}
