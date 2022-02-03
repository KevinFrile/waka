import { Component, ElementRef, OnDestroy, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { InfoVehiculoPage } from '../info-vehiculo/info-vehiculo.page';
import { MapboxService } from '../../services/mapbox.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  constructor(private routerOutlet: IonRouterOutlet, private modalController: ModalController, 
              private servicioMapBox: MapboxService, private renderer: Renderer2){
  }

  ngOnInit() {
    this.cargarMapa()
  }


  
  cargarMapa() {

    this.servicioMapBox.cargarMapa()
      .then((data) => {
        console.log("nice", data)
      })
      .catch((data) => {
        console.log("F", data)
      })
      
  }
  
  async presentModal() {

    const modal = await this.modalController.create({
      component: InfoVehiculoPage,
      initialBreakpoint: 0.8,
      breakpoints: [0.0, 0.8, 1],
      showBackdrop: true


    });

    await modal.present();
  }

}


