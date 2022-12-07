import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgenciaService } from '../agencia-service';
import { Agencia } from '../agencia.model';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
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
  title = 'Agregar agencia';
  closeResult: string = '';

  agencia!:number | undefined;
  descripcionAgencia!: string | undefined;
  prefijoAgencia!: string | undefined;
  contador = 0;
  
  constructor(private agenciaService: AgenciaService, private router: Router, private route: ActivatedRoute, private modalService: NgbModal)
  { 
    console.log("soy el constructor");
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



  open(content:any, agencia? : Agencia) 
  {  
    console.log(agencia); 
    if(agencia != undefined)
    {
      this.title = "Modificar Agencia";
      this.agencia = agencia.agencia;
      this.descripcionAgencia = agencia.descripcionAgencia;
      this.prefijoAgencia = agencia.prefijoAgencia;
    } 
    else 
    {
      this.title = "Agregar Agencia";
      this.agencia = undefined;
      this.descripcionAgencia = undefined;
      this.prefijoAgencia = undefined;
    }
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => 
    {
      this.closeResult = `Closed with: ${result}`;
      if(this.closeResult.includes("Save click"))
      {
        this.guardarAgencia()
      }
    }
    ,(reason) => 
    {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


  getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) 
    {
      console.log('presiono esc');
      console.log(reason);
      return 'by pressing ESC';
    } 
    else if (reason === ModalDismissReasons.BACKDROP_CLICK)
    {
      console.log('by clicking on a backdrop');
      console.log(reason);
      return 'by clicking on a backdrop';
    } 
    else 
    {
      console.log('ocurrio otra cosa');
      console.log(reason);
      return  `with: ${reason}`;
    }
  }

  guardarAgencia()
  {
    if(this.agencia !== undefined)
    {
      console.log('Vamos a modificar a : ' + this.descripcionAgencia + " con el Id: " + this.agencia);
    }
    else 
    {
      console.log('Vamos a agregar a : ' + this.descripcionAgencia);
      
      if(this.descripcionAgencia !== undefined && this.prefijoAgencia !== undefined)
      {
        //Para el id hay que consultar el ultimo Id y sumarle  1 ya que la porqueria de base de datos , el que hizo al tabla de agencias no puso identity para generar los Id de las tablas
        const agencia_guardar = new Agencia(this.obtenerConsecutivo(), this.descripcionAgencia, this.prefijoAgencia);
        console.log("agregando ..." );
        this.agenciaService.agregarAgencia(agencia_guardar);
      }    
    }


   
  }

  obtenerConsecutivo()
  {
    try 
    {
      let id_actual : number;
      let id_mayor : number;
  
      id_actual = 0;
      id_mayor = 0;
  
  
      this.agencias.forEach(agencia => {
        id_actual = agencia.agencia;
        if(id_actual > id_mayor){
          id_mayor = agencia.agencia;
        }
      });
  
      return id_mayor + 1;
    } 
    catch (error) 
    {
      console.log(error);
      return -1;
    }
    
  }


}
