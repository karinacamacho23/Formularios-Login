import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormArray} from '@angular/forms';
import { ValidadoresService } from '../../services/validadores.service';

@Component({
  selector: 'app-reactivo',
  templateUrl: './reactivo.component.html',
 })
export class ReactivoComponent implements OnInit {

	form : FormGroup;

	constructor( private fb : FormBuilder,
				 private validadores : ValidadoresService ) { 
		this.crearFormulario ();
		this.cargarDatosAlFormulario ();
		this.crearListeners ();
	}

	ngOnInit(): void {
	} 
	
	get pasatime() : any{

		return this.form.get('pasatiempos') as FormArray;
	}


	get nombreInvalido ( ) {
		if (this.form.get('nombre').invalid && this.form.get('nombre').touched){
			return true;
		}
	}

	get apellidoInvalido ( ) {
		if (this.form.get('apellido').invalid && this.form.get('apellido').touched){
			return true;
		}
	}

	get correoInvalido ( ) {
		if (this.form.get('correo').invalid && this.form.get('correo').touched){
			return true;
		}
	}

	get usuarioInvalido ( ) {
		if (this.form.get('usuario').invalid && this.form.get('usuario').touched){
			return true;
		}
	}

	get passw1Invalido ( ) {
		if (this.form.get('passw1').invalid && this.form.get('passw1').touched){
			return true;
		}
	}

	get passw2Invalido ( ) {
		const pass1= this.form.get('passw1').value;
		const pass2= this.form.get('passw2').value;
		return ( pass1 === pass2 ) ? false : true;
	}

	get distritoInvalido ( ) {
		if (this.form.get('direccion.distrito').invalid && this.form.get('direccion.distrito').touched){
			return true;
		}
	}

	get ciudadInvalido ( ) {
		if (this.form.get('direccion.ciudad').invalid && this.form.get('direccion.ciudad').touched){
			return true;
		}
	}



	/*crearFormulario (){
		this.form = this.fb.group ({
			nombre   : ['ana', [Validators.required, Validators.minLength(3)]],
			apellido : ['camacho', [Validators.required, Validators.minLength(3)]],
			correo   : ['anakmak@mnkasf.com', [Validators.required ,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]]

		});
	}
	*/crearFormulario (){
		this.form = this.fb.group ({
			nombre    : ['', [Validators.required, Validators.minLength(3)]],
			apellido  : ['', [Validators.required, Validators.minLength(3)]],
			correo    : ['', [Validators.required ,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
			usuario   : ['', , this.validadores.existeUsuario],
			passw1  : ['', [Validators.required]],
			passw2  : ['', [Validators.required]],
			direccion : this.fb.group ({
				distrito: ['', Validators.required],
				ciudad  : ['', Validators.required]
			}),

			/*un arreglo dentro de un objeto*/
			pasatiempos : this.fb.array([
				
			])
		}, {
			validators: this.validadores.contraseñasIguales('passw1', 'passw2')
		});
	}

	cargarDatosAlFormulario () {

		this.form.reset ({
			nombre: 'Maria',
  			apellido: 'dshck',
 			correo: 'asda@jsdhj.com',
 			usuario: 'Miguel',
 			passw1 : '1234',
 			passw2 : '1234',
  			direccion: {
    			distrito: 'wwr',
   				ciudad: 'ger'
   			}
		});

			/*Cargar valores en el arreglo*/

		['Comer', 'Dormir', 'Cantar'].
			forEach( valor => this.pasatime.push( this.fb.control (valor) ));
	}
x

	

	agregarElem (){
		this.pasatime.push ( this.fb.control ('', [Validators.required, Validators.minLength(3)]))

	}

	eliminarElem ( idx : number) {
		this.pasatime.removeAt ( idx );
	}

	guardar () {
 
		if( this.form.invalid){
			return Object.values( this.form.controls ).forEach ( control => {
				/**/
				if (control instanceof FormGroup){
					Object.values (control.controls).forEach (cont => {
						cont.markAsTouched();
					
					});
				}else{
					control.markAsTouched();
				}
			})
		}
		console.log(this.form.value);
		/*this.form.reset();*/
	}

	/*adicional*/
	crearListeners () {
		this.form.valueChanges.subscribe ( valor =>	console.log(valor));

		/*this.form.statusChanges.subscribe ( estado =>	console.log({ estado } ));
*/
		this.form.get('usuario').statusChanges.subscribe( status => console.log({status}) )
	}
}
