import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgenciaService } from '../agencia-service';
import { Agencia } from '../agencia.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as icono from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-agencia',
  templateUrl: './agencia.component.html',
  styles: []
})
export class AgenciaComponent implements OnInit 
{

  icono = icono;

  agencias: Agencia[] = [];
  
  constructor(private agenciaService: AgenciaService, private router: Router, private route: ActivatedRoute)
  { 
    
  }

  ngOnInit(): void
  {
    this.agenciaService.obtenerAgencias().subscribe((agenciasObtenidas: Agencia[]) => {
        this.agencias = agenciasObtenidas;
        this.agenciaService.setAgencias(this.agencias);
        console.log('Agencias obtenidas del suscriber:' + this.agencias);
      }
    );
  }

}
