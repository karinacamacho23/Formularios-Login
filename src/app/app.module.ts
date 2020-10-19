import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import lib para manejo de FORMULARIOS
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './pages/template/template.component';
import { ReactivoComponent } from './pages/reactivo/reactivo.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    ReactivoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //Para formulario template
    ReactiveFormsModule //Para formularios reactivos
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
