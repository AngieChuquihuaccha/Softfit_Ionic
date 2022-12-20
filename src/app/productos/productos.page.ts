import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validator } from '@angular/forms';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { productodto } from '../dtos/producto.model';
import { ProductoService } from '../services/productos/producto.service';
import { ToastController } from '@ionic/angular';
import { ClienteService } from '../services/clientes/cliente.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  productos: any;
  nombre: FormControl = new FormControl('');
  constructor(private productoservice: ProductoService,
    private route: Router,
    private toastController: ToastController,
    private clienteService:ClienteService) { }

  ngOnInit() {
    this.finall();
    this.buscador()
    this.showMessage('Hola JOSE Bienvenido a nuestra tienda online')
  }

  finall() {
    this.productoservice.findall().subscribe((res: any) => {
      this.productos = res;
      console.log(res);
    })
  }

  goDatosPersonales(){
    this.route.navigate(['datos-personales']);
  }
  
  cancelar(){
    this.route.navigate(['login']);
  }

  navegacion() {
    this.route.navigate(['detalle-producto'])
  }

  produc(items: productodto) {
    console.log("item elegido ", items)
    this.productoservice.productoSeleccionado = items;
    this.navegacion();
  }

 

  prueba(valor:any){
    
     this.productoservice.finByName(valor.detail.value).subscribe(res =>{
      this.productos = res;
      console.log('prodcutos ' , this.productos)
    console.log('si entre' , valor.detail.value)
    });
    
  }

  
  buscador() {
    this.nombre.valueChanges
      .pipe(
        switchMap(search=>{
          if (search){
            return this.productoservice.finByName(search);

          }
          return this.productoservice.findall();
        })
    ).subscribe((res) => {
      this.productos = res;
      console.log(res)
    })
  
  }

  async showMessage(messages: string) {
    const toast = await this.toastController.create({
      message: messages,
      duration: 1500,
      position: 'bottom'
    });

    await toast.present();
  }

  redirigirCars(){
    this.route.navigate(['carrito'])
  }


}
