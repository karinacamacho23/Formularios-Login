import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',


})
export class TemplateComponent implements OnInit {

	usuario : any = {
		nombre: '',
		apellido:'',
		correo: ''
	}

/*	usuario : any = {
		nombre: 'Karina',
		apellido:'Camacho',
		correo: 'anakarina@gmail.com'
	}*/


  constructor() { }

  ngOnInit(): void {
  }

  Guardar( form : NgForm) {
  	if (form.invalid) {	
  		Object.values(form.controls).forEach(control =>{
  			control.markAsTouched(); 
  		})
  		return;

  	}

  	console.log (form.value);
  }

}
