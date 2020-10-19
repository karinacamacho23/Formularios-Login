import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class ValidadoresService {

  constructor() { }


  existeUsuario ( formControl : FormControl ): Promise <ErrorValidate> | Observable <ErrorValidate> {

  	if ( !formControl.value ){
  		return Promise.resolve(null);
  		/*!!!!!!retornando una promesa ya resuelta!!!!!!!!!!*/
  	}

  	return new Promise ( (resolve, reject) => {
  		setTimeout ( () => {
  			if ( formControl.value === 'karina' ){
  				resolve ( { existe : true } );
  			}else{
  				resolve ( null );
  			}
  		}, 3500 );
  	} )

  	
  }

  contraseñasIguales ( pass1Name : string, pass2Name :string ){
  	/*esta funcion regresa una funcion que se ejecutara donde sea llamada*/
  	return ( formGroup : FormGroup ) => {
  		const pass1Control = formGroup.controls[pass1Name];
  		const pass2Control = formGroup.controls[pass2Name];

  		if ( pass1Control === pass2Control ){
  			pass2Control.setErrors(null);
  		}else {
  			pass2Control.setErrors({ noEsIgual : true });
  		}
  	}
  }
}
interface ErrorValidate {
	[s : string] : boolean
}
/*
nota :
	[s : string] : boolean.Esa expresion solo dice:
	que puede regresar N cantidad de llaves (objetos) pero retornara booleanas*/