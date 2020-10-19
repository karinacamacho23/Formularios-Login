import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateComponent } from './pages/template/template.component';
import { ReactivoComponent } from './pages/reactivo/reactivo.component';


const routes: Routes = [
	{path: 'reactivo', component: ReactivoComponent},
	{path: 'template', component: TemplateComponent},
	{path: '**', pathMatch:'full', redirectTo:'reactivo'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
