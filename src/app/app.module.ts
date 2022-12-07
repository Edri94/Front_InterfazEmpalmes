import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgenciaService } from './agencia-service';
import { AgenciaComponent } from './agencia/agencia.component';
import { NgbModule} from  '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './data-service';
import { InicioComponent } from './inicio/inicio.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormularioAgenciasComponent } from './formulario-agencias/formulario-agencias.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    AgenciaComponent,
    InicioComponent,
    FormularioAgenciasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FontAwesomeModule, 
    FormsModule
  ],
  providers: [AgenciaService, DataService],
  bootstrap: [AppComponent],
  exports:[
    AppComponent
  ]
})
export class AppModule { }
