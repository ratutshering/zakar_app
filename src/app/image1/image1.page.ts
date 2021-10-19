import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ModalController, IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-image1',
  templateUrl: './image1.page.html',
  styleUrls: ['./image1.page.scss'],
})
export class Image1Page implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;
  
  sliderOpts = {
    zoom: true
  };

  constructor() { }

  ngOnInit() {
  }

}
