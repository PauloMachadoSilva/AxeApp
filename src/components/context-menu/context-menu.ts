import { EmpresaPage } from './../../pages/cadastro/empresas/empresa';
import { LoginPage } from './../../pages/login/login';
import { DashboardPage } from './../../pages/dashboard/dashboard';
import { Component,ViewChild } from '@angular/core';
import { MenuController, NavController, App, NavParams, Nav } from 'ionic-angular';
declare var google;

@Component({
    selector: 'context-menu',
    templateUrl: 'context-menu.html'
})
export class ContextMenu{
    @ViewChild(Nav) nav: Nav
    pages: [{title: string, component: any}]
    mapa: any;
    
   
  constructor(
    public navCtrl: NavController
  ) {
   //Array de páginas
    this.pages = [
       { title: 'Mapa',component: DashboardPage},
       { title: 'Cadastrar Empresa',component: EmpresaPage},
       { title: 'Cadastrar Entregadores',component: DashboardPage},
       { title: 'Meus Pedidos',component: DashboardPage},
       
       { title: 'Sair',component: LoginPage},
    ];
    

  }
 openPage(page: {title: string, component:any }):void{
    //Empilhar views
    //this.navCtrl.push(page.component);
    //Emviar para uma nova página
    this.navCtrl.setRoot(page.component);
    
 }
 adicionaMarcador(){
  
     let marcador = new google.maps.Marker({
       map: this.mapa,
       animation: google.maps.Animation.DROP,
       position: this.mapa.getCenter()
     });
  
     let conteudo = "<h4>The Club!</h4>";          
  
     let infoWindow = new google.maps.InfoWindow({
       content: conteudo
     });
  
     google.maps.event.addListener(marcador, 'click', () => {
       infoWindow.open(this.mapa, marcador);
     });
  
   }
}
    