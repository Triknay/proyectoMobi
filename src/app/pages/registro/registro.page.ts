import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular'; 
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  nombre: string = '';
  apellido: string = '';
  items: any[] = [];

  constructor(
    private alertController: AlertController,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit() {
    this.loadItems();
  }

  loadItems(): void {
    this.items = this.localStorageService.getItems();
  }

  addItem(): void {
    if (this.nombre && this.apellido) {
      this.localStorageService.addItem({ nombre: this.nombre, apellido: this.apellido });
      this.nombre = '';
      this.apellido = '';
      this.loadItems();
      this.logItems(); // Llamar para ver los items en la consola después de agregar
    }
  }

  async updateItem(index: number, item: any): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Actualizar Registro',
      inputs: [
        {
          name: 'nombre',
          type: 'text',
          placeholder: 'Nombre',
          value: item.nombre
        },
        {
          name: 'apellido',
          type: 'text',
          placeholder: 'Apellido',
          value: item.apellido
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Actualizar',
          handler: data => {
            this.localStorageService.updateItem(index, data);
            this.loadItems();
            this.logItems(); // Llamar para ver los items en la consola después de actualizar
          }
        }
      ]
    });

    await alert.present();
  }

  deleteItem(index: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este registro?')) {
      this.localStorageService.deleteItem(index);
      this.loadItems();
      this.logItems(); // Llamar para ver los items en la consola después de eliminar
    }
  }

  logItems(): void {
    const items = this.localStorageService.getItems();
    console.log('Items en localStorage:', items);
  }
}
