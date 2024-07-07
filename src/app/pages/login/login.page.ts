import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Toast } from '@capacitor/toast';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: string = "";
  contrasena: string = "";

  constructor(private alertController: AlertController) { }

  ngOnInit() { }

  revisar() {
    if (this.usuario) {
      this.presentToast('Usuario: ' + this.usuario);
    } else {
      this.presentToast('Por favor ingrese el usuario');
    }
  }

  async presentAlert(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Confirmación',
      message: mensaje,
      buttons: ['Aceptar']
    });
    await alert.present();
  }

  async presentToast(mensaje: string) {
    await Toast.show({
      text: mensaje,
      duration: 'long', // 'short' o 'long'
      position: 'bottom' // 'top', 'center', o 'bottom'
    });
  }

  ValidarCredenciales() {
    console.log(this.usuario);
    console.log(this.contrasena);
  }
}
