import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgenciaComponent } from './agencia/agencia.component';
import { InicioComponent } from './inicio/inicio.component';


const routes: Routes = [
  {
    path: '', component: InicioComponent
  },
  { 
    path: 'catalogos/agencias', component: AgenciaComponent
  },
    
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
