import { Component, AfterViewInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-cal-modal',
  templateUrl: './cal-modal.page.html',
  styleUrls: ['./cal-modal.page.scss'],
})
export class CalModalPage implements AfterViewInit {

  modalReady = false;
  calendar: any;

  constructor(private modalCtrl: ModalController) { }

  ngAfterViewInit() {
    console.log(this.calendar);
    setTimeout(() => {
      this.modalReady = true;
    }, 0);
  }

  close() {
    this.modalCtrl.dismiss();
  }
}
