import { Injectable } from "@angular/core";
import { Agencia } from "./agencia.model";
import { DataService } from "./data-service";

@Injectable()
export class AgenciaService 
{
    agencias: Agencia[] = [];

    constructor(private ds: DataService)
    {

    }

    /**
     * Se usa para modificar el valor del arreglo debido a la llamad asincrona
     * @param agencias Array de agencias
     */
    setAgencias(agencias: Agencia[])
    {
        this.agencias = agencias;
    }

    obtenerAgencias()
    {
        return this.ds.cargarAgencias();
    }

    agregarAgencia(agencia: Agencia)
    {
        console.log(" agencia a gregar: " + agencia.descripcionAgencia);
        this.ds.agregarAgencia(agencia)
        .subscribe(
            (a : Agencia) => {
                console.log("se agrega al arreglo la agencia recien insertada suscriber: " + a.agencia);
                this.agencias.push(a);
            }
        );
    }
}
