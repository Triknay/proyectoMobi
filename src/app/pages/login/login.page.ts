import { Component, OnInit, viewChild } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: string ="";
  contrasena: string ="";


  constructor(private alertController: AlertController, private toastController: ToastController) { }

  ngOnInit() {
  }

  revisar(){
    //this.presentAlert(this.usuario)
    this.presentToast('bottom', this.usuario)
  }

  async presentAlert(mensaje:string){
    const alert = await this.alertController.create({
      header: 'soy una confirmacion',
      message: mensaje,
      buttons: ['Aceptar']
    });
    await alert.present();
  }

  async presentToast(position: 'top' | 'middle' | 'bottom', mensaje:string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: position,
    });

    await toast.present();
  }

  ValidarCredenciales(){
    console.log(this.usuario);
    console.log(this.contrasena);
  }

}
