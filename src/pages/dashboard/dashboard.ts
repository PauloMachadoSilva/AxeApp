import { ElementRef, Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContextMenu } from './../../components/context-menu/context-menu';
import { Geolocation } from '@ionic-native/geolocation';
declare var google;
@Component({
    selector: 'dashboard',
    templateUrl: 'dashboard.html'
})
export class DashboardPage{
 
    @ViewChild('mapa') mapaDiv: ElementRef;
    mapa: any;
    directionsDisplay = new google.maps.DirectionsRenderer;
    directionsService = new google.maps.DirectionsService;
    startPosition: any;
    originPosition: any;
    destinationPosition: any;
  
        constructor(
            private geolocation: Geolocation,
            public navCtrl: NavController
        )
        {
    
        }

        ionViewDidLoad() {

            // this.geolocation.getCurrentPosition().
            // then((posicao) => {
            //     const position = new google.maps.LatLng(posicao.coords.latitude, posicao.coords.longitude);
            //     const mapOptions = {
            //       center: position,
            //       zoom: 18,
            //       // mapTypeId: google.maps.MapTypeId.ROADMAP
            //     }
            //     this.mapa = new google.maps.Map(this.mapaDiv.nativeElement, mapOptions);

            //     var image = 'assets/icon/map_home.png';                
            //     const marker = new google.maps.Marker({
            //       position:position,
            //       map: this.mapa,
            //       title: "Minha Casa",
            //       animation: google.maps.Animation.DROP,
            //       label: "",
            //       draggable:true,
            //       icon: image
            //     })
            //   }, (erro) => {
            //     console.log(erro);
            //   });

              this.initializeMap();
          }
          initializeMap(){
            this.geolocation.getCurrentPosition().
             then((posicao) => {
                 const position = new google.maps.LatLng(posicao.coords.latitude, posicao.coords.longitude);
                 const mapOptions = {
                   center: position,
                   zoom: 18,
                   // mapTypeId: google.maps.MapTypeId.ROADMAP
                 }
                 this.startPosition = position;
                 this.mapa = new google.maps.Map(this.mapaDiv.nativeElement, mapOptions);
                 this.directionsDisplay.setMap(this.mapa);

                 var image = 'assets/icon/map_home.png';                
                     const marker = new google.maps.Marker({
                       position:position,
                       map: this.mapa,
                       title: "Minha Casa",
                       animation: google.maps.Animation.DROP,
                       label: "",
                       draggable:true,
                       icon: image
                     })
          }, (erro) => {
                 console.log(erro);
              });
            
          }
          caculateRoute(){
            if(this.destinationPosition){
              const request = {
                origin: this.startPosition,
                destination: this.destinationPosition,
                travelMode:'DRIVING'
              };
              this.traceRoute(this.directionsService,this.directionsDisplay,request);
            }
          }
          traceRoute(service: any, display: any, request: any){

            service.route(request,function(result,status){
             //if rota for ok retorna a rota
              if(status=='OK'){
                display.setDirections(result);
              }
            })
          }
          // adicionaMarcador(){
            
          //      let marcador = new google.maps.Marker({
          //        map: this.mapa,
          //        animation: google.maps.Animation.DROP,
          //        position: this.mapa.getCenter()
          //      });
            
          //      let conteudo = "<h4>The Club!</h4>";          
            
          //      let infoWindow = new google.maps.InfoWindow({
          //        content: conteudo
          //      });
            
          //      google.maps.event.addListener(marcador, 'click', () => {
          //        infoWindow.open(this.mapa, marcador);
          //      });
            
          //    }
    }