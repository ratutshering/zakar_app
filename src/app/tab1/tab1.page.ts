import {Component, OnInit} from '@angular/core';
import {AlertController, LoadingController, ModalController, ToastController} from '@ionic/angular';
import {CalModalPage} from '../pages/cal-modal/cal-modal.page';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  type: string;
  events: any;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  current_date: any;
  calendar: any;
  month: any;
  error: any;

  constructor(public loadingController: LoadingController,
              public alertController: AlertController,
              private modalCtrl: ModalController,
              private http: HttpClient,
              private datepipe: DatePipe) {}
  async ngOnInit() {
    const loading = await this.loadingController.create({
      message: 'Please Wait',
      duration: 1000
    });
    await loading.present();
    this.type = 'dzongkha';
    this.current_date = new Date();
    this.month = this.current_date.toLocaleString('default', { month: 'long' });;
    console.log(this.month);
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const latest_date =this.datepipe.transform(this.current_date, 'yyyy-MM-dd',);

    console.log(latest_date);
    this.http.get('https://www.drukzakar.com/api/get_event/' + latest_date).subscribe(async (data: any) => {
      this.events = data;
      await loading.onDidDismiss();
      console.log(this.events);
    }, async err => {
        console.log(err);
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'Net Error',
          message: 'Check Your Internet Connectivity!',
          buttons: [
            {
              text: 'OK'
            }]
        });

        await alert.present();
      });
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

  async openCalModal() {
    const modal = await this.modalCtrl.create({
      component: CalModalPage,
      cssClass: 'cal-modal',
      backdropDismiss: false
    });
    await modal.present();
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  async next_day() {
    const loading = await this.loadingController.create({
      message: 'Please Wait',
      duration: 1000
    });
    await loading.present();
    this.current_date.setDate(this.current_date.getDate() + 1);
    this.month = this.current_date.toLocaleString('default', {month: 'long'});
    const next = this.datepipe.transform(this.current_date, 'yyyy-MM-dd',);
    console.log(next);
    this.http.get('https://www.drukzakar.com/api/get_event/' + next).subscribe(async (events: any) => { //use this address FQDN
      this.events = events;
      await loading.onDidDismiss();
    }, async err => {
      console.log(err);
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Well, Nothing to Worry!',
        message: 'Coming Soon!',
        buttons: [
          {
            text: 'OK',
            handler: () => {
              location.reload();
            }
          }]
      });

      await alert.present();
    });
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  async previous_day() {
    const loading = await this.loadingController.create({
      message: 'Please Wait',
      duration: 1000
    });
    await loading.present();
    this.current_date.setDate(this.current_date.getDate() - 1);
    this.month = this.current_date.toLocaleString('default', {month: 'long'});
    const previous = this.datepipe.transform(this.current_date, 'yyyy-MM-dd',);
    console.log(previous);
    this.http.get('https://www.drukzakar.com/api/get_event/' + previous).subscribe(async (events) => {
      this.events = events;
      await loading.onDidDismiss();
    }, async err => {
      console.log(err);
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Well, Nothing to Worry!',
        message: 'Coming Soon!',
        buttons: [
          {
            text: 'OK',
            handler: () => {
              location.reload();
            }
          }]
      });
      await alert.present();
    });
  }
}
