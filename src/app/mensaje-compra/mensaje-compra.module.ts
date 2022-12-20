import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MensajeCompraPageRoutingModule } from './mensaje-compra-routing.module';

import { MensajeCompraPage } from './mensaje-compra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MensajeCompraPageRoutingModule
  ],
  declarations: [MensajeCompraPage]
})
export class MensajeCompraPageModule {}
