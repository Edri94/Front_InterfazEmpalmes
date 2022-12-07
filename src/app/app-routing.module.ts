import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgenciaComponent } from './agencia/agencia.component';
import { FormularioAgenciasComponent } from './formulario-agencias/formulario-agencias.component';
import { InicioComponent } from './inicio/inicio.component';


const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  },
  { 
    path: 'catalogos/agencias',
    component: AgenciaComponent,
    children:[
      {
        path: 'agregar',
        component: FormularioAgenciasComponent
      },
      {
        path: 'modificar/:idAgencia',
        component: FormularioAgenciasComponent
      },
    ]
  },
    
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
