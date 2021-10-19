import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ModalController, IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-image3',
  templateUrl: './image3.page.html',
  styleUrls: ['./image3.page.scss'],
})
export class Image3Page implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;
  
  sliderOpts = {
    zoom: true
  };
  constructor() { }

  ngOnInit() {
  }

}
