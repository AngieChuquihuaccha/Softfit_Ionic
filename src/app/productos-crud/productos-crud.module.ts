import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductosCRUDPageRoutingModule } from './productos-crud-routing.module';

import { ProductosCRUDPage } from './productos-crud.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductosCRUDPageRoutingModule
  ],
  declarations: [ProductosCRUDPage]
})
export class ProductosCRUDPageModule {}
