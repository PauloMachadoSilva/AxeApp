import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

import 'rxjs/Rx';
import { Observable, ReplaySubject, Subscription } from 'rxjs';



@Injectable()
export class PaisesProvider {
  private apiREST = 'http://dadosabertos.rio.rj.gov.br/apiTransporte/apresentacao/rest/index.cfm/obterPosicoesDaLinha/474';
  
  constructor(public http: Http) {
    console.log('Hello PaisesProvider Provider');
  }
 
  listaPaises():Observable<any> {
    return this
    .http
    .get(this.apiREST)
    .map(response => response.json()
    );            
  }
 
}