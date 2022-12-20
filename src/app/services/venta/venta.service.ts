import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { clientedto } from 'src/app/dtos/login.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  static idcli:any;
  constructor(private http: HttpClient) { }

  registraVenta(venta:any){
    return this.http.post(`${environment.apiUrl}/venta`,venta)
  }
}
