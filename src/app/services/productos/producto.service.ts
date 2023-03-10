import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { productodto } from 'src/app/dtos/producto.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productoSeleccionado: productodto | undefined;

  productoregistrar: productodto | undefined = undefined;

  constructor(private http: HttpClient) { }

  findall() {
    return this.http.get(`${environment.apiUrl}/productos`);
  }

  finByName(nombre: string){
    return this.http.get(`${environment.apiUrl}/productos/nombre/${nombre}`)
  }

  delete(codigo:string){
    return this.http.delete(`${environment.apiUrl}/productos/delete/${codigo}`)
  }

  register(producto: productodto){
    return this.http.post<productodto>(`${environment.apiUrl}/productos`,producto);
  }

  update(producto: productodto) {
    return this.http.put<productodto>(`${environment.apiUrl}/productos`, producto);
  }

  }
  
