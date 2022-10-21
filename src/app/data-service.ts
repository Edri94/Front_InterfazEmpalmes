import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from  "@angular/common/http";
import { Agencia } from "./agencia.model";

@Injectable()
export class DataService 
{
    urlBase = 'http://localhost:8080/InterfazEmpalmes/webservice/agencias';
    
    constructor(private httpClient: HttpClient)
    {
        
        
    }

    cargarAgencias()
    {
        console.log(this.httpClient.get<Agencia[]>(this.urlBase));
        return this.httpClient.get<Agencia[]>(this.urlBase);
    }
}
