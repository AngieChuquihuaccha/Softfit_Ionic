import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mensaje-compra',
  templateUrl: './mensaje-compra.page.html',
  styleUrls: ['./mensaje-compra.page.scss'],
})
export class MensajeCompraPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirigir(){
    this.router.navigate(['productos']);
  }
}
