import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular'; 



@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  usuarioRecibido: string='';
  passwordRecibido: string='';

  nombre: any='';
  apellido: any='';
  selectedOption: any='';
  selectedDate: any='';
  usuario: any='';
  password: any='';

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Mensaje',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  guardar() {
  }

}
