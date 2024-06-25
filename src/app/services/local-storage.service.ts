import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private storageKey = 'registros';

  constructor() {}

  getItems(): any[] {
    const items = localStorage.getItem(this.storageKey);
    return items ? JSON.parse(items) : [];
  }

  addItem(item: any): void {
    const items = this.getItems();
    items.push(item);
    localStorage.setItem(this.storageKey, JSON.stringify(items));
  }

  updateItem(index: number, newItem: any): void {
    const items = this.getItems();
    items[index] = newItem;
    localStorage.setItem(this.storageKey, JSON.stringify(items));
  }

  deleteItem(index: number): void {
    const items = this.getItems();
    items.splice(index, 1);
    localStorage.setItem(this.storageKey, JSON.stringify(items));
  }
}
