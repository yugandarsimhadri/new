import { Component, OnInit } from '@angular/core';
//import { ModalController } from '@ionic/angular';
//import { register } from '../register.page.scss';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
    //modalController: any;

    constructor(/*public modalController: ModalController*/) { }

  ngOnInit() {
  }
  //  async presentModal() {
  //  const modal = await this.modalController.create({
  //      component: register,
  //    componentProps: { value: 123 }
  //  });
  //  return await modal.present();
  //}
}
