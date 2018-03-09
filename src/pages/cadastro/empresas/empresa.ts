import { PaisesProvider } from './../../../providers/provider';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


 
@Component({
  selector: 'empresa',
  templateUrl: 'empresa.html'
})
export class EmpresaPage {
  paises: string[];
  constructor(public navCtrl: NavController,
              private paisesProvider: PaisesProvider) {
 
  }
 
  ionViewDidLoad() {
    this.listaPaises();
  }
 
  listaPaises() {
    this.paisesProvider.listaPaises()
       .subscribe(
         paises => this.paises. = paises);
  }
 
}