import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from '../services/clientes/cliente.service';

@Component({
  selector: 'app-initiation-app-one',
  templateUrl: './initiation-app-one.page.html',
  styleUrls: ['./initiation-app-one.page.scss'],
})
export class InitiationAppOnePage implements OnInit {

  constructor(
    private router: Router,
    public clienteService: ClienteService
  ) { }
    
  ngOnInit() {
  }

  slides=[

    {
      
      img: 'assets/img/OsoPeluche.png',
      titulo: 'Hacer pedidos especiales<br>para momentos especiales.'

    },
    {
      img: 'assets/img/RamoFloral.png',
      titulo: 'Tu único catálogo para<br>productos increibles.'

    },
    { 
      img: 'assets/img/Delivery.png',
      titulo: '<br><br>Entregas más rápidas<br>que sus aplicaciones normales.'

    }

  ]


  redirigir(){
    this.router.navigate(['cliente-form']);
  }
}
