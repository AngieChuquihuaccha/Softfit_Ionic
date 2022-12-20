import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { productodto } from '../dtos/producto.model';
import { ProductoService } from '../services/productos/producto.service';
import { ViewWillEnter } from '@ionic/angular';

@Component({
  selector: 'app-productos-crud',
  templateUrl: './productos-crud.page.html',
  styleUrls: ['./productos-crud.page.scss'],
})
export class ProductosCRUDPage implements ViewWillEnter {
  productos: any;
  constructor(private productoservice: ProductoService,
    
    private route: Router) { }


  ionViewWillEnter() {
    this.finall();
  }

  finall() {
    this.productoservice.findall().subscribe((res: any) => {
      this.productos = res;
      console.log(res);
    })
  }

  cancelar(){
    this.route.navigate(['login']);
  }

  goDatosPersonales(){
    this.route.navigate(['datos-personales']);
  }


  delete(codigo: string){
    this.productoservice.delete(codigo).subscribe(res =>{
      this.productoservice.findall().subscribe(res => {
      console.log('se elimino con exito')
      this.productos = res;
      this.getProductos;
    })
    })
  }

  getProductos() {
    this.productoservice.findall().subscribe(res => {
      this.productos = res;
    })
  }

  redirigir(){
    this.route.navigate(['producto-form'])
  }

  editarProducto(producto: productodto){
    this.productoservice.productoregistrar = producto;
    this.route.navigate(['producto-form']);
    
  }
  
}
