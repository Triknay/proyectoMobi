import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-farmacia',
  templateUrl: './farmacia.page.html',
  styleUrls: ['./farmacia.page.scss'],
})
export class FarmaciaPage implements OnInit {

  financialData: any[] = [];
  datosUnidad: any;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.fetchFinancialData();
  }

  fetchFinancialData()
  {
    this.http.get('https://mindicador.cl/api').subscribe((response: any) => {

    console.log(response);

    this.financialData = this.transformData(response);

    });
    
  }

  transformData(data: any):any [] {
    const result = []

    for (const key in data){
      if(data.hasOwnProperty(key) && typeof data[key] === 'object')
      {
        result.push(data[key]);
      }
    }

    return result;
  }
  /* para ver
  obtenerDatosUnidad() {
    const apiUrl = 'https://mindicador.cl/api/dolar';
    this.http.get<any>(apiUrl).subscribe(
      data => {
        this.datosUnidad = data;
      },
      error => {
        console.error('Error al obtener datos del dólar', error);
      }
    );
  }*/
  
}
