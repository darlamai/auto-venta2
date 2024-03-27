

import { AbstractControl, ValidationErrors, ValidatorFn, FormGroup } from "@angular/forms";


export function validadorCodigo(): ValidatorFn{
    return (control: AbstractControl): ValidationErrors| null =>{
  
       const codigoV=/^\d{4}$/;
       let value=control.value;
       if(codigoV.test(value)){
        return null;
       }
      return {
        'codigoValidate':true
      };
  
    }
  }
  
  
  export function validarCodigoComparativo(){
    return (formulario:FormGroup): ValidationErrors| null =>{
      console.log('form:',formulario);
      let valor1=formulario.controls['marca'].value
      let valor2= formulario.controls['codigo'].value
      if (valor1===valor2){
        return null;
      }
  
      return {'codigo_comparativo':true};
  }
  }