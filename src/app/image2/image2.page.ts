import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ModalController, IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-image2',
  templateUrl: './image2.page.html',
  styleUrls: ['./image2.page.scss'],
})
export class Image2Page implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;
  
  sliderOpts = {
    zoom: true
  };

  constructor() { }

  ngOnInit() {
  }

}
