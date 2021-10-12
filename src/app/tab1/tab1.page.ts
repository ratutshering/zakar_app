import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {CalModalPage} from '../pages/cal-modal/cal-modal.page';
import { HttpClient } from '@angular/common/http';
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
  // eslint-disable-next-line @typescript-eslint/naming-convention

  constructor(private modalCtrl: ModalController, private http: HttpClient, private datepipe: DatePipe) {}
  ngOnInit() {
    this.type = 'dzongkha';
    this.current_date = new Date();
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const latest_date =this.datepipe.transform(this.current_date, 'yyyy-MM-dd',);
    console.log(latest_date);
    this.http.get('http://127.0.0.1:8000/api/get_event/' + latest_date).subscribe((data: any) => {
      this.events = data;
    });
    const month = this.current_date.getMonth() + 1;
    console.log(month);
    this.http.get('http://127.0.0.1:8000/api/get_calendar/' + month).subscribe((data: any) => {
        this.calendar = data;
    });
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

  async openCalModal() {
    const modal = await this.modalCtrl.create({
      component: CalModalPage,
      cssClass: 'cal-modal',
      backdropDismiss: false,
      componentProps: {
        calendar: this.calendar
      }
    });

    await modal.present();
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  next_day(){
    this.current_date.setDate(this.current_date.getDate() + 1);
    const next =this.datepipe.transform(this.current_date, 'yyyy-MM-dd',);
    console.log(next);
    this.http.get('http://127.0.0.1:8000/api/get_event/' + next).subscribe((events: any) => {
      this.events = events;
    });

    const month = this.current_date.getMonth() + 1;
    console.log(month);
    this.http.get('http://127.0.0.1:8000/api/get_calendar/' + month).subscribe((data: any) => {
      this.calendar = data;
    });
  }

  previous_day(){
    this.current_date.setDate(this.current_date.getDate() - 1);
    const previous =this.datepipe.transform(this.current_date, 'yyyy-MM-dd',);
    console.log(previous);
    this.http.get('http://127.0.0.1:8000/api/get_event/' + previous).subscribe((events) => {
      this.events = events;
    });

    const month = this.current_date.getMonth() + 1;
    console.log(month);
    this.http.get('http://127.0.0.1:8000/api/get_calendar/' + month).subscribe((data: any) => {
      this.calendar = data;
    });
  }
}
