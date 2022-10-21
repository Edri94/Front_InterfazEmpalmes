import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgenciaComponent } from './agencia/agencia.component';

const routes: Routes = [
  {path: '', component: AgenciaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
