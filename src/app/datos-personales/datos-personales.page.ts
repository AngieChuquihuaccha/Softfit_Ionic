import { Component, OnInit } from '@angular/core';
import { clientedto } from '../dtos/login.model';
import { VentaService } from '../services/venta/venta.service';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.page.html',
  styleUrls: ['./datos-personales.page.scss'],
})
export class DatosPersonalesPage implements OnInit {
  nombre:any;
  apellido:any;
  email:any;
  celular:any;
  direccion:any;
  constructor() { }

  ngOnInit() {
    this.cliente()
  }


  cliente(){
    this.nombre= VentaService.idcli.nombre;
    this.apellido=  VentaService.idcli.apellidoPat +  VentaService.idcli.apellidoMat
    this.email=  VentaService.idcli.email;
    this.celular =  VentaService.idcli.celular;
    this.direccion =  VentaService.idcli.direccion
    console.log(VentaService.idcli)

  }

}
