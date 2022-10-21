import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgenciaService } from './agencia-service';
import { AgenciaComponent } from './agencia/agencia.component';
import { NgbModule} from  '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './data-service';



@NgModule({
  declarations: [
    AppComponent,
    AgenciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [AgenciaService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
